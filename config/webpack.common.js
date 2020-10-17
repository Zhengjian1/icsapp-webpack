const { resolve } = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin')
const getCssLoaders = require('./webpackUtils/getCssLoaders.js');
const PROJECT_PATH = process.cwd();
const { entries, htmlPlugin } = require('./webpackUtils/getMultiPage.js');
const configs = require('./constant/index.js');

module.exports = {
    stats:{
        children: false,
        chunks: false,
        modules: false,
        warnings: false,
    },
    entry: entries,
    resolve: {
        extensions: ['.jsx', '.js', 'json'],
        alias: {
            '@/src': resolve(PROJECT_PATH, './src'),
            '@/components': resolve(PROJECT_PATH, './src/components'),
        },
        modules: [resolve(PROJECT_PATH, 'node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|js)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            ...getCssLoaders,
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/fonts',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        ...htmlPlugin,
        new webpack.DefinePlugin({
            'process.NODE_ENV': JSON.stringify(configs),
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: resolve(PROJECT_PATH, './public/asset'),
                    from: '*',
                    to: resolve(PROJECT_PATH, './dist'),
                    toType: 'dir',
                },
            ],
        }),
    ],
};
