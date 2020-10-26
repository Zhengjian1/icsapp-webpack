import { HTTPCONSTANTS } from '../http-constants';

export default {
    responseFilter(config) {
        let response = config.data;
        let filter = config.config.headers.filter;
        let funFilter = this[filter];
        if (funFilter !== null && funFilter !== undefined && typeof funFilter === 'function') {
            return this[filter](response);
        }
        //不存在过滤器
        return this.defaultFilter(response);
    },

    //项目默认过滤器
    defaultFilter(response) {
        if (response !== null && response !== undefined) {
            if (
                response.code !== null &&
                response.code !== undefined &&
                HTTPCONSTANTS.code.succesies.includes(response.code)
            ) {
                return response;
            } else {
                return JSON.stringify(response);
            }
        } else {
            return 'response为空';
        }
    },

    //不过滤
    noFilter(response) {
        return response;
    },

    //空数据过滤器
    nullDataFilter(response) {
        if (response !== null && response !== undefined) {
            if (
                response.code !== null &&
                response.code !== undefined &&
                HTTPCONSTANTS.code.succesies.includes(response.code)
            ) {
                if (response.data !== null && response.data !== undefined) {
                    return response;
                } else {
                    return '服务器数据异常data为null';
                }
            } else {
                return JSON.stringify(response);
            }
        } else {
            return 'response为空';
        }
    },
};
