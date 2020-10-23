import '@babel/polyfill';
import '@/pages/commoncss/reset.css';

import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '@/models/home';
import storage from '../../storage/storage';

const Layout = lazy(() => import('./layout/index'));
console.error(`2020年10月23日16:28:13`);

// let apirequest = new ApiRequest();
// apirequest.get('/institution/resea/tReportInfo/researchList', { type: -1 })
//     .then(response => {
//         console.error(response);
//     }).catch(err => {
//         console.error(err);
//     },
// );
//
// apirequest.postBody(
//     '/institution/insti/user/login/account',
//     null,
//     {
//         accountName: '15286047587',
//         accountPassword: md5('123456' + '_csc', 32),
//         systemCode: '9001',
//     }, 'nullData',
// ).then(resp => {
//     console.error('resp', resp);
// }).catch(err => {
//     console.error(err);
// });

storage.set('test', 'test').then(() => {
    storage.get('test').then((result) => {
        console.error(result);
    });
});

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
