export function common_height() {
    let pcHeight = { height: 0 };
    if (window.AlipayJSBridge) {
        let passData = window.AlipayJSBridge.startupParams.passData;
        let obj;
        if (typeof passData === 'string') {
            obj = JSON.parse(passData);
        } else {
            obj = passData;
        }
        obj.height = parseInt(obj.height);
        return obj;
    }
    return pcHeight;
}

export async function getPassData() {
    return new Promise((resolve, reject) => {
        if (window.AlipayJSBridge) {
            window.AlipayJSBridge.call('getStartupParams', { key: ['passData'] }, function (result) {
                try {
                    if (typeof result.passData === 'string') {
                        let obj = JSON.parse(result.passData);
                        obj.height = parseInt(obj.height);
                        resolve(obj);
                    } else {
                        let obj = result.passData;
                        obj.height = parseInt(obj.height);
                        resolve(obj);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        } else {
            resolve({ passData: { height: '52' } });
        }
    });
}
