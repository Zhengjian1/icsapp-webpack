const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'
const PROJECT_PATH = process.cwd();

const pattern = path.join(PROJECT_PATH, "src/pages", '/**/*.js');
const entries = {};
const htmlPlugin = [];

glob.sync(pattern).forEach(file => {
    const name = path.basename(file, '.js');

    try {
        entries[name] = `${process.cwd()}/src/pages/${name}.js`;
        htmlPlugin.push(
            new HtmlWebpackPlugin({
                template: path.resolve(process.cwd(), './public/index.html'),
                filename: `${name}.html`,
                chunks: [name],
                inject: 'body',
                cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
                minify: isDev ? false : {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    collapseBooleanAttributes: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    useShortDoctype: true,
                }
            }),
        )
    } catch (e) {
        console.error(`Invalid config file. ${file}\n${e}`);
    }
});

module.exports = {
    entries,
    htmlPlugin
};