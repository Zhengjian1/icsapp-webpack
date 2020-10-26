import Qs from 'qs';
import { intercept } from '@/src/router/intercept';
import { BROWSER } from '@/utils/env';
import { isEmpty } from '@/src/tools/string-util';
import { common_height } from '@/utils/height_utils';

export function RouterBase() {}

let instance;

export const router = () => {
    if (!instance) {
        instance = new RouterBase();
    }
    return instance;
};

RouterBase.prototype = {
    constructor: RouterBase,

    /**
     * 打开页面(包内)
     * @param url
     * @param option
     */
    push: async function (url, option) {
        console.log('execute method push(url,option) \n');
        intercept()
            .execute(url, option)
            .then((params) => {
                this.realPush(params.url, params.option);
            })
            .catch((err) => {
                console.error(err);
            });
    },

    /**
     * 打开页面
     * @param url
     * @param option
     */
    realPush: function (url, option) {
        url = `./${url}.html`;
        let param = {};
        if (BROWSER.versions.iPhone) {
            param.passData = common_height();
        } else {
            param.param = common_height();
        }

        if (!isEmpty(option.data)) {
            url = url + '?' + Qs.stringify(option.data);
        }
        param.url = url;
        console.log(`push by url => ${url}`);
        console.log('push by option => ', option);
        //判断是否是浏览器，走不同的跳转
        if (window.AlipayJSBridge) {
            window.AlipayJSBridge.call('pushWindow', param, (result) => {
                //todo:打开失败提示
            });
        } else {
            window.open(url, '_blank');
        }
    },

    /**
     * 打开页面(跨包拦截)
     * @param appid
     * @param url
     * @param option
     * @param indexAlias
     * @param interceptiId
     */
    open: function (appid, url, option, indexAlias, interceptiId) {
        intercept()
            .execute(url, option, appid, indexAlias, interceptiId)
            .then((params) => {
                this.startApp(params.appid, params.url, params.option, params.indexAlias);
            })
            .catch((err) => {
                console.error(err);
            });
    },

    /**
     * 打开页面(跨包不拦截)
     * @param appid
     * @param url
     * @param option
     * @param indexAlias
     * @return {Promise<never>}
     */
    startApp: function (appid, url, option, indexAlias) {
        if (isEmpty(appid)) {
            console.error('跨包跳转需传入appid');
            return;
        }

        if (option === null || option === undefined) {
            option = {};
        }

        let param = {
            url: 'index',
            st: 'NO',
            pd: 'NO',
            bb: 'auto',
            closeCurrentWindow: false,
            appClearTop: false,
            startMultApp: 'YES',
            passData: common_height(),
        };

        if (isEmpty(url) || url === indexAlias) {
            url = param.url;
        }
        url = `/${url}.html`;
        if (!isEmpty(option.data)) {
            url = url + '?' + Qs.stringify(option.data);
        }
        param.url = url;

        console.log(`open by appid => ${appid}`);
        console.log(`open by url => ${param.url}`);
        console.error('open by params => ', JSON.stringify(param));

        if (window.AlipayJSBridge) {
            window.AlipayJSBridge.call(
                'startApp',
                {
                    appId: appid,
                    param: param,
                },
                function (result) {
                    alert(result);
                },
            );
        }
    },

    /**
     * 拦截器-可自定义
     * @param url
     * @param option
     * @param id
     * @param indexAlias
     * @param interceptiId
     * @return {Promise<void>}
     */
    loadIntercept: async function (url, option, id, indexAlias, interceptiId) {
        return await intercept()
            .execute(url, option, id, indexAlias, interceptiId)
            .catch((err) => {
                console.error(err);
            });
    },
};
