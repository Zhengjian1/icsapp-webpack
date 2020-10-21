const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'https://zs-test.csc108.com/rest',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        },
    }));
    app.use(createProxyMiddleware('/local', {
        target: 'http://localhost:8080/spu',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/local": ""
        },
    }));
};
