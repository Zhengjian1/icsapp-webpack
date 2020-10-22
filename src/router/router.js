import { getPassData } from '../utils/height_utils';

export async function go2app(id) {
    let passData = await getPassData();

    let param = {
        url: 'index',
        st: 'NO',
        pd: 'NO',
        bb: 'auto',
        closeCurrentWindow: false,
        appClearTop: false,
        startMultApp: 'YES',
        passData: passData,
    };

    param.url = `/${param.url}.html`;

    console.error('跳转', param.url);

    if (window.AlipayJSBridge) {
        window.AlipayJSBridge.call(
            'startApp',
            {
                appId: id,
                param: param,
            },
            function (result) {},
        );
    }
}
