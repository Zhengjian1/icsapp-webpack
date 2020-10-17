const getHotReloadConfig = [
    {
        test: /app\.jsx$/,
        loader: 'string-replace-loader',
        options: {
            multiple: [
                { search: 'import Layout', replace: 'import {HotLayout}' },
                { search: '<Layout', replace: '<HotLayout' },
            ],
        },
    },
    {
        test: /index\.jsx$/,
        loader: 'string-replace-loader',
        options: {
            multiple: [
                {
                    search: 'export default Layout',
                    replace: `
                        let _layout = props => <Layout {...props} />;
                        _layout = require('react-hot-loader/root').hot(_layout);
                        export const HotLayout = _layout
                    `,
                },
            ],
        },
    },
    {
        test: /index\.jsx$/,
        loader: 'string-replace-loader',
        options: {
            multiple: [
                {
                    search: 'export default errorBoundary(Layout)',
                    replace: `
                        let _layout = errorBoundary(props => <Layout {...props} />);
                        _layout = require('react-hot-loader/root').hot(_layout);
                        export const HotLayout = _layout
                    `,
                },
            ],
        },
    },
];

module.exports = getHotReloadConfig;