import { fetchIndexData } from '@/src/services/index/index';
import { call, put } from 'redux-saga/effects';

export default {
    namespace: 'index',
    state: {
        count: 0,
        data: [],
    },
    reducers: {
        add(state) {
            return {
                ...state,
                count: state.count + 1,
            };
        },
        minus(state) {
            return {
                ...state,
                count: state.count - 1,
            };
        },
        saveData(state, { payload }) {
            return {
                ...state,
                data: payload.stages,
            };
        },
    },
    effects: {
        *fetch({ payload }) {
            try {
                const response = yield call(fetchIndexData, payload);
                yield put({
                    type: 'saveData',
                    payload: response.data,
                });
            } catch (e) {
                console.error(e);
            }
        },
    },
};
