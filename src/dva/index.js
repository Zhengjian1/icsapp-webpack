import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { handleActions } from 'redux-actions';
import prefixNamespace from './prefixNamespace';
import getSaga from './getSaga';
import createPromiseMiddleware from './createPromiseMiddleware';

function dva() {
    const app = {
        _models: [],
        model,
        start,
    };
    return app;

    function model(m) {
        const prefixedModel = prefixNamespace({ ...m });
        app._models.push(prefixedModel);
    }

    function start(opts = {}) {
        const { RootComponent } = opts;
        let sagas = [];
        const rootReducer = {};

        app._getSaga = getSaga.bind(null);
        app._models.forEach((m) => {
            rootReducer[m.namespace] = handleActions(m.reducers || {}, m.state);
            if (m.effects) {
                sagas.push(app._getSaga(m.effects, m));
            }
        });

        const sagaMiddleware = createSagaMiddleware();
        const promiseMiddleware = createPromiseMiddleware(app);
        const enhancer = compose(
            applyMiddleware(sagaMiddleware, promiseMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f,
        );
        const store = createStore(combineReducers({ ...rootReducer }), {}, enhancer);
        app._store = store;

        // Extend store
        store.runSaga = sagaMiddleware.run;
        store.asyncReducers = {};

        sagas.forEach(sagaMiddleware.run);

        ReactDOM.render(<Provider store={store}>{RootComponent}</Provider>, document.querySelector('#root'));
    }
}

export default dva;
export { connect } from 'react-redux';
