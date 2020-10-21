const { createProxyMiddleware } = require('http-proxy-middleware');
const configs = require('../constant/index.js');

const proxy = configs.default.proxy;

module.exports = function (app) {
    for( let k in proxy) {
        app.use(createProxyMiddleware(k, proxy[k]));
    }
};
