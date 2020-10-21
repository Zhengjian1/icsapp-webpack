export const RequestParamsAssemble = (method, url, params, option) => {
    let requestParams = {};

    requestParams.method = method;
    if (url === null || url === undefined || url.length === 0) {
        throw new Error('url不能为空');
    }
    requestParams.url = url;

    if (params === null || params === undefined) {
        params = {};
    }
    requestParams.params = params;

    if (option === null || option === undefined) {
        option = {};
    }

    requestParams.option = option;

    return requestParams;
};
