import axios from 'axios';
import qs from 'qs';

function checkStatus(response) {
    // 处理其他状态码

    if (response && response.status >= 200 && response.status < 500) {
        return response;
    }

    console.error(response);
}

//添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

//添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.resolve(error.response);
    },
);

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.timeout = 10000;

const request = {
    post(url, params) {
        return axios({
            method: 'post',
            url,
            data: params,
        }).then((response) => {
            const res = checkStatus(response);
            return res.data;
        });
    },
    get(url, params) {
        params = qs.stringify(params);
        return axios({
            method: 'get',
            url,
            params,
        }).then((response) => {
            const res = checkStatus(response);
            return res.data;
        });
    },
};

export default request;
