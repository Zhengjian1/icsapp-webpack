/* 预先编译dll */
const path = require('path');
const webpack = require('webpack');
const PROJECT_PATH = process.cwd();

module.exports = {
    mode: 'development',
    resolve: {
		extensions: [".js", ".jsx"]
	},
    entry: {
        dll: ['react', 'react-dom', 'prop-types'],
    },
    output: {
        path: path.join(PROJECT_PATH, "dist"),
        filename: '[name].js',
        library: '[name]_library',
    },
    plugins: [
        // dll
        new webpack.DllPlugin({
            path: path.join(PROJECT_PATH, "dist", "[name]-manifest.json"),
            name: '[name]_library',
            context: PROJECT_PATH,
        }),
    ],
};
