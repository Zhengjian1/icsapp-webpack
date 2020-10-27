import axios from 'axios';
import { PrepareOption } from '../prepare/prepare-option';
import { PerpareSign } from '../prepare/perpare-sign';
import aixosFilter from '../filter/axios-filter';
import { HTTPCONSTANTS } from '../http-constants';
import BaseClient from 'sven-dev-tools/http/client/base-client';

export default function AxiosClient(proxy) {
    this.proxy = proxy;
}

AxiosClient.prototype = new BaseClient();

//签名逻辑
AxiosClient.prototype.signtrue = async function (requestOption) {
    let ai = new Promise((resolve) => {
        let appinfo = {
            apikey: 'icsapp',
            apisecret: 'NPbv0msgxDBUMlax',
        };
        setTimeout(() => {
            resolve(appinfo);
        }, 100);
    });

    requestOption.appInfo = await ai;

    // requestOption.appInfo = {
    //     apikey: 'icsapp',
    //     apisecret: 'NPbv0msgxDBUMlax'
    // }
    this.sign = PerpareSign(requestOption);
    console.error('signtrue', this.sign);
    return this.sign;
};

//请求前准备
AxiosClient.prototype.prepared = async function (requestOption) {
    console.error('prepared', requestOption);
    return PrepareOption(requestOption);
};

//超时时间配置
axios.defaults.timeout = 8000;

//发送请求
AxiosClient.prototype.request = function (requestOption, resolve, reject) {
    console.error('request', requestOption);
    axios(this.proxy + requestOption.url, requestOption.requestData)
        .then((response) => {
            this.complete();
            resolve(response);
        })
        .catch((err) => {
            this.fail();
            reject(err);
        });
};

axios.defaults.timeout = HTTPCONSTANTS.time.timeout;

//request拦截
axios.interceptors.request.use(
    (config) => {
        config.headers.filter = config.filter;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

//response拦截
axios.interceptors.response.use(
    (config) => {
        let resp = aixosFilter.responseFilter(config);
        if (typeof resp === 'string') {
            throw new Error(resp);
        } else {
            return resp;
        }
    },
    (err) => {
        return Promise.reject(err);
    },
);

//请求完成后的处理
AxiosClient.prototype.complete = () => {};

//请求失败后的处理
AxiosClient.prototype.fail = () => {};
