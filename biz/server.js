// demos/12.js
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname, '../dist'));

app.use(main);
app.listen(4000, () => {
    console.log('服务器启动在4000端口');
});
