const { resolve } = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin')
const getCssLoaders = require('./webpackUtils/getCssLoaders.js');
const PROJECT_PATH = process.cwd();
const { entries, htmlPlugin } = require('./webpackUtils/getMultiPage.js');
const configs = require('./constant/index.js');

module.exports = {
    stats: {
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
            "@/images": resolve(PROJECT_PATH, './src/images'),
            "@/utils": resolve(PROJECT_PATH, './src/utils'),
            "@/models": resolve(PROJECT_PATH, './src/models'),
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
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'assets/[name].[hash:8].[ext]',
                            esModule: false,
                            outputPath: "img",
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        ...htmlPlugin,
        new webpack.DefinePlugin({
            'process.CONFIG': JSON.stringify(configs),
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
