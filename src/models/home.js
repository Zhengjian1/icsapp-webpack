export default {
    namespace: 'home',
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
    },
    effects: {},
};
