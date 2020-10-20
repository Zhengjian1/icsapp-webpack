import dva from '../dva';
import React, { Suspense } from 'react';
import Loading from '@/components/loading/index';
const { hot } = require('react-hot-loader/root');
const { setConfig } = require('react-hot-loader');

const env = process.CONFIG.default.env !== 'production' || 'development';

const handelLazy = (Component) => (
    <Suspense fallback={<Loading />}>
        <Component />
    </Suspense>
);

const handelHot = (Layout) => {
    hot(Layout);
    setConfig({
        trackTailUpdates: false,
        logLevel: 'debug',
        // hotHooks: true,
    });
};

const connectDva = ({ modals, rootComponent }) => {
    // 连接dva
    const app = dva();

    if (Array.isArray(modals)) {
        modals.forEach((modal) => app.model(modal));
    } else {
        app.model(modals);
    }

    app.start({
        rootComponent,
    });

    return app;
};

const renderAPP = (opts) => {
    const { modals, lazyCompentent } = opts;
    // 懒加载
    const rootComponent = handelLazy(lazyCompentent);
    // 热更新
    if (env) {
        handelHot(lazyCompentent);
    }

    // 连接dva
    const app = connectDva({
        modals,
        rootComponent,
    });

    return app;
};

export default renderAPP;
