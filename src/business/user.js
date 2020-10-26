import $ from 'jquery';
import storage, { tryParseString2Obj } from '@/src/storage/storage';
import { APPCONSTANTS } from '@/src/business/constants';

export default function User() {}

User.prototype = {
    constructor: User,

    /**
     * 获取加密用户信息
     * @param userId    用户id
     * @param key       存储key
     * @param usertype  用户类型
     * @return {Promise<unknown>}
     */
    getEncUser: function (userId, key, usertype = 'I') {
        return new Promise((resolve) => {
            window.AlipayJSBridge &&
                window.AlipayJSBridge.call(
                    'getUserDataEnc',
                    {
                        userType: usertype,
                        userId: userId,
                        key: key,
                    },
                    function (result) {
                        console.log('获取用户(方法:getEncUser)');
                        console.log(`usertype:${usertype}`);
                        console.log(`userId:${userId}`);
                        console.log(`key:${key}`);
                        console.log('result:', result);
                        let user = null;
                        if (!$.isEmptyObject(result) && !$.isEmptyObject(result.data)) {
                            user = tryParseString2Obj(result.data);
                        }
                        resolve(user);
                    },
                );
        });
    },

    /**
     * 判断环境获取用户信息
     * @param userId    用户id
     * @param key       存储key
     */
    getAsynUser: function (userId, key) {
        if (window.AlipayJSBridge) {
            return new Promise((resolve) => {
                this.getEncUser(userId, key).then((user) => {
                    if ($.isEmptyObject(user) || $.isEmptyObject(user.users)) {
                        user = null;
                    }
                    console.error('user', user);
                    resolve(user);
                });
            });
        } else {
            return storage.get(key).then((user) => {
                if ($.isEmptyObject(user) || $.isEmptyObject(user.users)) {
                    user = null;
                }
                return Promise.resolve(user);
            });
        }
    },

    /**
     * 获取用户信息
     * @return {Promise<unknown>}
     */
    getUser: function () {
        return storage.get(`${APPCONSTANTS.main.code}-userid`).then((userid) => {
            return this.getAsynUser(userid, APPCONSTANTS.main.code);
        });
    },

    setEncUser: function (userId, key, value, usertype = 'I') {
        if (window.AlipayJSBridge) {
            window.AlipayJSBridge &&
                window.AlipayJSBridge.call(
                    'setUserDataEnc',
                    {
                        userType: usertype,
                        userId: userId,
                        key: key,
                        value: value,
                    },
                    function (result) {
                        console.log('设置用户(方法:setEncUser):');
                        console.log(`usertype:${usertype}`);
                        console.log(`userId:${userId}`);
                        console.log(`key:${key}`);
                        console.log('value:', value);
                        console.log('result:', result);
                    },
                );
        } else {
            storage.set(key, value);
        }
        storage.set(`${APPCONSTANTS.main.code}-userid`, '5947');
    },

    login: function (userid, key, profession) {
        this.setUser(userid, key, profession);
    },
};
