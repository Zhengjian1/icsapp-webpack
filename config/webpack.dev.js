const { resolve } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const WebpackBar = require('webpackbar')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const common = require('./webpack.common.js')
const PROJECT_PATH = process.cwd();
const configs  = require("./constant/index.js")

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'js/[name].js',
        path: resolve(PROJECT_PATH, './dist'),
    },
    devServer: {
        host: configs.default.host,
        port: configs.default.port,
        stats: 'errors-only',
        clientLogLevel: 'silent',
        compress: true,
        open: true,
        hot: true,
        proxy: configs.default.proxy
    },
    plugins: [
        new WebpackBar({
            name: '正在启动',
            color: '#fa8c16',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HardSourceWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
        },
    }
})