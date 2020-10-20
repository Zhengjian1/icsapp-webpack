import { fetchHomeData, fetchDemoData } from '@/src/services/common/index';

export default {
    namespace: 'common',
    state: {
        data: [],
    },
    reducers: {
        saveData(state, { payload }) {
            const handleData = (payload) => payload.map((item, idx) => ({ title: item.name, sub: idx }));
            return {
                ...state,
                data: handleData(payload),
            };
        },
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const { fromPage } = payload;
            delete payload.fromPage;

            if (fromPage === 'home') {
                const response = yield call(fetchHomeData, payload);
                yield put({
                    type: 'saveData',
                    payload: response.data.stages,
                });
            } else {
                const response = yield call(fetchDemoData, payload);
                yield put({
                    type: 'saveData',
                    payload: response.data.slice(3, 8),
                });
            }
        },
    },
};
