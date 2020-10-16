const px2rem = require('postcss-px2rem-exclude');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const getCSSModuleLocalIdent = require("./getCSSModuleLocalIdent");
const isDev = process.env.NODE_ENV !== 'production'


const handleCssLoaders = (cssOptions) => [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: cssOptions
    },
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                // 修复一些和 flex 布局相关的 bug
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                    autoprefixer: {
                        grid: true,
                        flexbox: 'no-2009'
                    },
                    stage: 3,
                }),
                require('postcss-normalize'),
                px2rem({ remUnit: 75, exclude: /node_modules/i }),
            ],
            sourceMap: isDev,
        }
    },
]

const cssLoaders = [
    {
        test: /\.css$/,
        use: handleCssLoaders({
            // modules: false,
            sourceMap: isDev,
            importLoaders: 1,
            modules: {
                getLocalIdent: getCSSModuleLocalIdent,
            },
        }),
    },
    {
        test: /\.less$/,
        use: [
            ...handleCssLoaders({importLoaders: 2}),
            {
                loader: 'less-loader',
                options: {
                    sourceMap: isDev,
                },
            },
        ],
    },
]

module.exports = cssLoaders;