const { resolve } = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const manifestJson = require('../dist/dll-manifest.json');
const common = require('./webpack.common.js');
const PROJECT_PATH = process.cwd();
const configs = require('./constant/index.js');
const proxy = require('./webpackUtils/setupProxy.js');
const isAnalyzer = process.env.analyzer === 'true';

// 插件
const plugins = [
    new WebpackBar({
        name: '正在启动',
        color: '#fa8c16',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new HardSourceWebpackPlugin(),
    // new HardSourceWebpackPlugin.ExcludeModulePlugin({
    //     test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
    // }),
    // dll
    new webpack.DllReferencePlugin({
        context: PROJECT_PATH,
        manifest: manifestJson,
    }),
    new AddAssetHtmlPlugin([
        {
            filepath: resolve(PROJECT_PATH, './dist/dll.js'),
            includeSourcemap: false,
            hash: true,
        },
    ]),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
    })
];

if(isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin())
}


module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'js/[name].js',
        path: resolve(PROJECT_PATH, './dist'),
        // publicPath: './'
    },
    devServer: {
        host: configs.host || configs.default.host,
        port: configs.default.port,
        stats: 'errors-only',
        clientLogLevel: 'silent',
        compress: true,
        open: true,
        // hot: true,
        // proxy: configs.default.proxy,
        before(app) {
            proxy(app)
        },
        onListening: function () {
            console.log(chalk.green(`
=====================================================

    项目启动在    http://${configs.host}:${configs.default.port}
    
=====================================================
            `));
        },
    },
    plugins:plugins,
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            // allChunks: true
        },
    },
});
