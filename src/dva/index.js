import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { handleActions } from 'redux-actions';
import { fork, takeEvery } from 'redux-saga/effects';

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
        const { rootComponent } = opts;
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

        // document.addEventListener('DOMContentLoaded', () => {
        //     _models.forEach(({ subscriptions }) => {
        //         if (subscriptions) {
        //             subscriptions.forEach((sub) => {
        //                 sub(store.dispatch);
        //             });
        //         }
        //     });
        // });

        function getWatcher(k, saga) {
            return function* () {
                yield takeEvery(k, saga);
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

        ReactDOM.render(<Provider store={store}>{rootComponent}</Provider>, document.querySelector('#root'));
    }
}

export default dva;
export { connect } from 'react-redux';
