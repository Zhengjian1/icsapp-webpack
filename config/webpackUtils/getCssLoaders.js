const nextcss = require('postcss-cssnext');
const postImport = require('postcss-import');
const postcssFlexBugs = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const px2rem = require('postcss-px2rem-exclude');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV !== 'production';

const handleCssLoaders = (cssOptions) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options:  {publicPath: '../'}
        },
        {
            loader: 'css-loader',
            options: cssOptions,
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [
                    postImport(),
                    nextcss({
                        browsers: ['last 2 versions', 'IOS >= 8', 'android>= 4'],
                    }),
                    postcssFlexBugs,
                    postcssPresetEnv({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    // Adds PostCSS Normalize as the reset css with default options,
                    // so that it honors browserslist config in package.json
                    // which in turn let's users customize the target behavior as per their needs.
                    px2rem({
                        remUnit: 75,
                        exclude: /node_modules/i,
                    }),
                ],
                sourceMap: isDev,
            },
        },
    ];
    return loaders;
}

const cssLoaders = [
    {
        test: /\.css$/,
        use: handleCssLoaders({
            // modules: false,
            sourceMap: isDev,
            importLoaders: 1,
            modules: {
                localIdentName: isDev ? '[path][name]_[local]' : '[local]-[hash:base64:8]',
            },
        }),
    },
    {
        test: /\.less$/,
        use: [
            ...handleCssLoaders({ importLoaders: 2 }),
            {
                loader: 'less-loader',
                options: {
                    sourceMap: isDev,
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    },
];

module.exports = cssLoaders;
