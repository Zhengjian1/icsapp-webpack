import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '@/models/home';
import ApiRequest from '../../http/requests/api-request';
import md5 from 'js-md5';
import { getPassData } from '../../utils/height_utils';

const Layout = lazy(() => import('./layout/index'));
console.error(`2020年10月22日14:01:13`);
getPassData()
    .then((passData) => {
        console.error(passData);
    })
    .catch((e) => {
        console.error('获取高度失败:', e);
    });

let apirequest = new ApiRequest();

apirequest
    .get('/institution/resea/tReportInfo/researchList', { type: -1 })
    .then((response) => {
        console.error(response);
    })
    .catch((err) => {
        console.error(err);
    });

apirequest
    .postBody(
        '/institution/insti/user/login/account',
        null,
        {
            accountName: '15286047587',
            accountPassword: md5('123456' + '_csc', 32),
            systemCode: '9001',
        },
        'nullData',
    )
    .then((resp) => {
        console.error('resp', resp);
    })
    .catch((err) => {
        console.error(err);
    });

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
