export default {
    inputType: 'common',
    inputBusiness: 'biz',

    /**
     * 设置缓存
     * @param inputKey
     * @param inputValue
     * @param inputType
     * @param inputBusiness
     * @return {Promise<unknown>}
     */
    set(inputKey, inputValue, inputType = this.inputType, inputBusiness = this.inputBusiness) {
        return new Promise((resolve) => {
            if (window.AlipayJSBridge) {
                window.AlipayJSBridge &&
                    window.AlipayJSBridge.call(
                        'setAPDataStorage',
                        {
                            type: inputType,
                            business: inputBusiness,
                            key: inputKey,
                            value: inputValue,
                        },
                        function (result) {
                            console.log('设置数据(方法:set):' + JSON.stringify(result));
                            console.log('inputType:' + inputType);
                            console.log('inputBusiness:' + inputBusiness);
                            console.log('inputKey:' + inputKey);
                            console.log('result:', result);
                            resolve();
                        },
                    );
            } else {
                window.localStorage.setItem(inputKey, inputValue);
                resolve();
            }
        });
    },

    /**
     * 获取缓存
     * @param inputKey
     * @param inputType
     * @param inputBusiness
     */
    get(inputKey, inputType = this.inputType, inputBusiness = this.inputBusiness) {
        return new Promise((resolve, reject) => {
            if (window.AlipayJSBridge) {
                window.AlipayJSBridge &&
                    window.AlipayJSBridge.call(
                        'getAPDataStorage',
                        {
                            type: this.inputType,
                            business: this.inputBusiness,
                            key: inputKey,
                        },
                        function (result) {
                            console.log('获取数据(方法:get):');
                            console.log('key:' + inputKey);
                            console.log('inputType:' + inputType);
                            console.log('inputBusiness:' + inputBusiness);
                            console.log('result:', result);
                            resolve(tryParseString2Obj(result.data));
                        },
                    );
            } else {
                resolve(tryParseString2Obj(window.localStorage.getItem(inputKey)));
            }
        });
    },

    /**
     * 移除缓存
     * @param inputKey
     * @param inputType
     * @param inputBusiness
     */
    remove(inputKey, inputType = this.inputType, inputBusiness = this.inputBusiness) {
        return new Promise((resolve, reject) => {
            if (window.AlipayJSBridge) {
                window.AlipayJSBridge &&
                    window.AlipayJSBridge.call(
                        'removeAPDataStorage',
                        {
                            type: this.inputType,
                            business: this.inputBusiness,
                            key: key,
                        },
                        function (result) {
                            console.log('移除数据(方法:remove):');
                            console.log('key:' + inputKey);
                            console.log('inputType:' + inputType);
                            console.log('inputBusiness:' + inputBusiness);
                            console.log('result:', result);
                            resolve();
                        },
                    );
            } else {
                window.localStorage.removeItem(inputKey);
                resolve();
            }
        });
    },
};

/**
 * 尝试解析json字符串为对象
 * @param result
 * @return {any}
 */
function tryParseString2Obj(result) {
    try {
        let data = JSON.parse(result);
        if (typeof data == 'object' && data) {
            return data;
        } else {
            return result;
        }
    } catch (e) {
        return result;
    }
}
