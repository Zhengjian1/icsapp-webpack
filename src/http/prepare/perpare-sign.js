import md5 from 'js-md5';

export const PerpareSign = (requestOption) => {
    return perpareAuthor(requestOption.url, requestOption.params, requestOption.method, requestOption.appInfo);
};

/* 数据签名 */
function perpareAuthor(url, data, method, appInfo) {
    url = '/rest' + url;
    // TODO: 判断生产还是测试，使用相应的key
    let authorData = {
        apikey: appInfo.apikey,
        ts: curTime(),
    };
    let allData = Object.assign(data, authorData);
    // let allData = $.extend(data, authorData);
    let paramStrings = [];
    for (let i in allData) {
        if (allData[i] === undefined || allData[i] === null) {
            allData[i] = '';
        }
        paramStrings.push(i.toString() + '=' + allData[i].toString());
    }
    allData['sign'] = createSign(method.toUpperCase(), url, appInfo.apisecret, paramStrings, null);
    return allData;
}

/**
 * 生成签名
 */
function createSign(method, servicePath, apiSecret, paramStrings, postbody) {
    let str = method + servicePath;
    paramStrings = paramStrings.sort();
    str = str + paramStrings.join('');
    str = str + apiSecret;
    str.toString();
    let urlEncodeStr = encodeURIComponent(str);
    return md5(urlEncodeStr);
}

/**
 * 当前时间戳加10分钟
 */
function curTime() {
    let time = new Date();
    // let t = time.getTime();
    // time.setTime(t + 1000 * 60 * 10);
    return time.getTime();
}
