const { resolve } = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const manifestJson = require('../dist/dll-manifest.json');
const common = require('./webpack.common.js');
const PROJECT_PATH = process.cwd();
const configs = require('./constant/index.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'js/[name].js',
        path: resolve(PROJECT_PATH, './dist'),
    },
    devServer: {
        host: configs.hostname || configs.default.host,
        port: configs.default.port,
        stats: 'errors-only',
        clientLogLevel: 'silent',
        compress: true,
        open: true,
        hot: true,
        proxy: configs.default.proxy,
        onListening: function () {
            console.log(`
=====================================================

    ${chalk.green(`项目启动在${configs.hostname}:3000`)}
    
=====================================================
            `);
        },
    },
    plugins: [
        new WebpackBar({
            name: '正在启动',
            color: '#fa8c16',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HardSourceWebpackPlugin(),
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
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
        },
    },
});
