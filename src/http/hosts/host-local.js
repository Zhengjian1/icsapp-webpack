import AxiosClient from '../http/axios-client';

let local;

export const Local = function () {
    if (!local) {
        local = new AxiosClient('/local');
    }
    return local;
};
