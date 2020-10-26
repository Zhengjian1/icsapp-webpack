import { isEmpty } from '@/src/tools/string-util';
import pathMap from '@/src/pathMap';

export function Intercept() {}

let instance;
export const intercept = () => {
    if (!instance) {
        instance = new Intercept();
    }
    return instance;
};

Intercept.prototype = {
    constructor: Intercept,

    /**
     * 跳转拦截器
     * @param url           页面地址
     * @param option        可选参数
     * @param appid         跳转目标appid
     * @param indexAlias    首页别名,不传indexAlias会打开index.html(这个参数是为了解决目标包首页不是index的情况)
     * @param interceptId   登陆与权限拦截用户所属APPID(这个参数解决跳转目标如果为88881111但是需要使用88880002权限的问题)
     * @return {Promise<void>}
     */
    execute: function (url, option, appid, indexAlias, interceptId) {
        let params = {
            url: url,
            option: option,
            appid: appid,
            indexAlias: indexAlias,
            interceptId: interceptId,
        };
        return this.check(params)
            .then((params) => this.authIntercept(params))
            .then((params) => this.roleIntercept(params));
    },

    /**
     * 跳转前检查
     */
    check: function (params) {
        if (isEmpty(params.interceptId)) {
            params.interceptId = params.appid;
        }
        console.log(`intercept url => ${params.url}`);
        console.log(`intercept menus by appid => ${params.interceptId}`);
        if (isEmpty(params.url)) {
            console.error('url is undefined');
            return Promise.reject('url is undefined');
        }
        if (params.option === null || params.option === undefined) {
            params.option = {};
        }

        params.option.realUrl = params.url;
        params.option.indexAlias = params.indexAlias;
        if (!isEmpty(params.option.urlAlias)) {
            //存在别名
            params.url = params.option.urlAlias;
        }
        params.page = pathMap.pagesMap[params.url];
        console.log(`find url in pathMap => `, params.page);
        if (isEmpty(params.page)) {
            // 异常，地址在路由中不存在
            return Promise.reject(`pathMap中不存在url => ${params.url}`);
        }

        return Promise.resolve(params);
    },

    /**
     * 登陆拦截
     */
    authIntercept: function (params) {
        console.log('\nauth start ==================================================');
        console.log(`url => ${params.url}`);
        console.log('option => ', params.option);
        console.log('auth end ====================================================');
        if (!isEmpty(params.page.auth)) {
            //进行登陆拦截
            return this.realAuth(params);
        }
        return Promise.resolve(params);
    },

    /**
     * 实际的登陆拦截逻辑
     * @param params
     * @return {Promise<never>}
     */
    realAuth: function (params) {
        return Promise.reject('请先登陆');
    },

    /**
     * 权限拦截
     */
    roleIntercept: function (params) {
        console.log('\nrole start ==================================================');
        console.log(`url => ${params.url}`);
        console.log('option => ', params.option);
        console.log('role end ====================================================');
        let needRole = !isEmpty(params.page.role);
        if (needRole) {
            //开始权限拦截
            return this.realRole(params);
        }
        return Promise.resolve(params);
    },

    /**
     * 实际的权限拦截逻辑
     * @param params
     * @return {Promise<never>}
     */
    realRole: function (params) {
        return Promise.reject('没有权限');
    },
};
