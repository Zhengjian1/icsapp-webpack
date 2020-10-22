const { merge } = require('webpack-merge');
const { resolve } = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const common = require('./webpack.common.js');
const PROJECT_PATH = process.cwd();

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: resolve(PROJECT_PATH, './build'),
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackBar({
            name: '正在打包',
            color: '#fa8c16',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: { pure_funcs: ['console.log'] },
                },
            }),
            new OptimizeCssAssetsPlugin(),
        ].filter(Boolean),
        splitChunks: {
            chunks: 'all',
            name: true,
        },
    },
});
