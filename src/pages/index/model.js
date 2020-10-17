export default {
    namespace: 'count',
    state: 0,
    reducers: {
        ['count/add'](count) {
            return count + 1;
        },
        ['count/minus'](count) {
            return count - 1;
        },
    },
};
