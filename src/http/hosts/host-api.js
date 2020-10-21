import AxiosClient from '../http/axios-client';

const { baseUrl } = process.CONFIG.default;
let api;

export const Api = function () {
    if (!api) {
        api = new AxiosClient(baseUrl);
    }
    return api;
};
