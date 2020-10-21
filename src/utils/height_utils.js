import { BROWSER } from './env';

export function common_height() {
    let passData = { height: 52 };

    if (window.AlipayJSBridge) {
        if (BROWSER.versions.android) {
            console.error('android,startupParams', window.AlipayJSBridge.startupParams);
            //android高度计算
            try {
                let passDataStr =
                    window.AlipayJSBridge.startupParams.passData ||
                    JSON.parse(window.AlipayJSBridge.startupParams.startupParams).passData;
                console.error('passDataStr', passDataStr);
                let temp;
                try {
                    temp = JSON.parse(passDataStr);
                } catch (e) {
                    console.error('passDataStr转换异常,直接使用passDataStr');
                }
                passData = temp ? temp : passDataStr;
            } catch (e) {
                console.error('android获取高度失败', e);
            }
        } else if (BROWSER.versions.ios) {
            console.error('ios,startupParams', window.AlipayJSBridge.startupParams);
            //ios高度计算
            try {
                let passDataStr =
                    window.AlipayJSBridge.startupParams.passData ||
                    window.AlipayJSBridge.startupParams.startupParams.passData;
                console.error('passDataStr', passDataStr);
                let temp;
                try {
                    temp = JSON.parse(passDataStr);
                } catch (e) {
                    console.error('passDataStr转换异常,直接使用passDataStr');
                }
                passData = temp ? temp : passDataStr;
            } catch (e) {
                console.error('ios获取高度失败', e);
            }
        }
    }
    console.error('=====================================');
    console.error('passData', passData);
    console.error('=====================================');
    return passData;
}
