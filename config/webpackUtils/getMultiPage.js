const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const PROJECT_PATH = process.cwd();

const pattern = path.join(PROJECT_PATH, 'src/pages', '/**/**/app.jsx');
const entries = {};
const htmlPlugin = [];

glob.sync(pattern).forEach((file) => {
    const paths = file.split('/');
    const name = paths[paths.length - 2];

    try {
        entries[name] = `${process.cwd()}/src/pages/${name}/app.jsx`;
        htmlPlugin.push(
            new HtmlWebpackPlugin({
                template: path.resolve(process.cwd(), './public/template.html'),
                filename: name === "home" ? "index.html" :`${name}.html`,
                chunks: [name],
                inject: 'body',
                cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
                config: {
                    debug: isDev
                },
                minify: isDev
                    ? false
                    : {
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
                      },
            }),
        );
    } catch (e) {
        console.error(`Invalid config file. ${file}\n${e}`);
    }
});

module.exports = {
    entries,
    htmlPlugin,
};
