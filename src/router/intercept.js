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
        return new Promise(async (resolve, reject) => {
            if (isEmpty(interceptId)) {
                interceptId = appid;
            }
            console.log(`intercept url => ${url}`);
            console.log(`intercept menus by appid => ${interceptId}`);
            if (isEmpty(url)) {
                console.error('url is undefined');
                return reject('url is undefined');
            }
            if (option === null || option === undefined) {
                option = {};
            }

            option.realUrl = url;
            option.indexAlias = indexAlias;

            return await this.checkPathMap(url, option, interceptId, resolve, reject);
        });
    },

    /**
     * 检查url是否存在pathMap里面
     */
    checkPathMap: async function (url, option, interceptId, resolve, reject) {
        //这里使用别名,是因为所有pdf都请求同一个地址,但拥有不同的权限,所以应该有一个别名来区分权限
        if (!isEmpty(option.urlAlias)) {
            //存在别名
            url = option.urlAlias;
        }
        let page = pathMap.pagesMap[url];
        console.log(`auth page => `, page);
        if (isEmpty(page)) {
            // 异常，地址在路由中不存在
            return reject(`pathMap中不存在url => ${url}`);
        }
        return await this.authIntercept(page, url, option, interceptId, resolve, reject);
    },

    /**
     * 登陆拦截
     */
    authIntercept: async function (page, url, option, interceptId, resolve, reject) {
        if (!isEmpty(page.auth)) {
            //进行登陆拦截
            return reject('请先登陆');
        }
        return await this.roleIntercept(page, url, option, interceptId, resolve, reject);
    },

    /**
     * 权限拦截
     */
    roleIntercept: async function (page, url, option, interceptId, resolve, reject) {
        let needRole = !isEmpty(page.role);
        if (needRole) {
            //开始权限拦截
            return reject('没有权限');
        }
        return await resolve(option);
    },
};
