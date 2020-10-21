export const PrepareOption = (requestOption) => {
    requestOption.requestData = {
        method: requestOption.method,
        params: requestOption.sign,
    };

    //拼装选项
    if (requestOption.option !== null && requestOption.option !== undefined) {
        requestOption.requestData = Object.assign(requestOption.requestData, requestOption.option);
    }

    return requestOption;
};
