export async function getPassData() {
    return new Promise((resolve, reject) => {
        if (window.AlipayJSBridge) {
            window.AlipayJSBridge.call('getStartupParams', { key: ['passData'] }, function (result) {
                try {
                    if (typeof result.passData === 'string') {
                        resolve(JSON.parse(result.passData));
                    } else {
                        resolve(result.passData);
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
