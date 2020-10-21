import dva from '../dva';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
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

const connectDva = ({ modals, RootComponent }) => {
    // 连接dva
    const app = dva();

    if (Array.isArray(modals)) {
        modals.forEach((modal) => app.model(modal));
    } else {
        app.model(modals);
    }

    app.start({
        RootComponent,
    });

    return app;
};

const renderAPP = (opts) => {
    const { modals = [], lazyCompentent } = opts;
    // 懒加载
    const RootComponent = handelLazy(lazyCompentent);
    // 热更新c
    if (env) {
        handelHot(lazyCompentent);
    }

    let app;
    if (Array.isArray(modals) && modals.length === 0) {
        ReactDOM.render(RootComponent, document.querySelector('#root'));
    } else {
        // 连接dva
        app = connectDva({
            modals,
            RootComponent,
        });
    }

    return app;
};

export default renderAPP;
