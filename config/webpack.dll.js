/* 预先编译dll */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PROJECT_PATH = process.cwd();

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        dll: ['react', 'react-dom', 'antd-mobile', 'prop-types'],
    },
    output: {
        path: path.join(PROJECT_PATH, 'build'),
        filename: '[name].js',
        library: '[name]_library',
    },
    plugins: [
        new CleanWebpackPlugin(),
        // dll
        new webpack.DllPlugin({
            path: path.join(PROJECT_PATH, 'build', '[name]-manifest.json'),
            name: '[name]_library',
            context: PROJECT_PATH,
        }),
    ],
};
