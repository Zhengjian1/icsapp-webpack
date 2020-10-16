const { resolve } = require('path')
const webpack = require('webpack')
// const CopyPlugin = require('copy-webpack-plugin')
const getCssLoaders = require("./getCssLoaders.js")
const PROJECT_PATH = process.cwd();
const { entries, htmlPlugin } = require("./getMultiPage.js")
const configs = require("./constant/index.js")

module.exports = {
    entry: entries,
    resolve: {
        extensions: ['.js', '.jsx', "json"],
        alias: {
            '@/src': resolve(PROJECT_PATH, './src'),
            '@/components': resolve(PROJECT_PATH, './src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
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

        ]
    },
    plugins: [
        ...htmlPlugin,
        new webpack.DefinePlugin({
            "process.NODE_ENV": JSON.stringify(configs)
        })
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             context: resolve(PROJECT_PATH, './public/favico'),
        //             from: '*',
        //             to: resolve(PROJECT_PATH, './dist'),
        //             toType: 'dir',
        //         },
        //     ],
        // }),
    ],
}