'use strict';
const path = require('path');
module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.*'],
        alias: {
            // 文件路径别名
            '@/src': path.resolve(__dirname, './src'),
            '@/components': path.resolve(__dirname, './src/components'),
            '@/images': path.resolve(__dirname, './src/images'),
            '@/utils': path.resolve(__dirname, './src/utils'),
            '@/models': path.resolve(__dirname, './src/models'),
            '@/pages': path.resolve(__dirname, './src/pages')
        },
    },
};
