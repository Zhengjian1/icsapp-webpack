import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware, { takeEvery, takeLatest } from 'redux-saga';
import { handleActions } from 'redux-actions';
import { fork } from 'redux-saga/effects';

function dva() {
    const _models = [];
    const app = {
        model,
        start,
    };
    return app;

    function model(model) {
        _models.push(model);
    }

    function start(opts = {}) {
        const { Layout } = opts;
        let sagas = {};
        const rootReducer = {};

        _models.forEach((model) => {
            rootReducer[model.namespace] = handleActions(model.reducers || {}, model.state);
            sagas = { ...sagas, ...model.effects };
        });

        const sagaMiddleware = createSagaMiddleware();
        const enhancer = compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f,
        );
        const store = createStore(combineReducers({ ...rootReducer }), {}, enhancer);
        sagaMiddleware.run(rootSaga);

        document.addEventListener('DOMContentLoaded', () => {
            _models.forEach(({ subscriptions }) => {
                if (subscriptions) {
                    check(subscriptions, is.array, 'Subscriptions must be an array');
                    subscriptions.forEach((sub) => {
                        sub(store.dispatch);
                    });
                }
            });
        });

        function getWatcher(k, saga) {
            return function* () {
                yield takeLatest(k, saga);
            };
        }

        function* rootSaga() {
            for (var k in sagas) {
                if (sagas.hasOwnProperty(k)) {
                    const watcher = getWatcher(k, sagas[k]);
                    yield fork(watcher);
                }
            }
        }

        ReactDOM.render(<Provider store={store}>{Layout}</Provider>, document.querySelector('#root'));
    }
}

export default dva;
export { connect } from 'react-redux';
