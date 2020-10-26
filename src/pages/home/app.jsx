import '@babel/polyfill';
import '@/pages/commoncss/reset.css';

import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '@/models/home';
import storage from '../../storage/storage';
import ApiRequest from '@/src/http/requests/api-request';
import md5 from 'js-md5';
import { APPCONSTANTS } from '@/src/business/constants';
import User from '@/src/business/user';

const Layout = lazy(() => import('./layout/index'));
console.error(`2020年10月23日16:28:13`);

let apirequest = new ApiRequest();
// apirequest.get('/institution/resea/tReportInfo/researchList', { type: -1 })
//     .then(response => {
//         console.error(response);
//     }).catch(err => {
//         console.error(err);
//     },
// );
//
let user = new User();
// apirequest.postBody(
//     '/institution/insti/user/send/message',
//     null,
//     { phone: '13910193970', systemCode: '9001' },
// ).then(resp => {
//     apirequest.postBody(
//         '/institution/insti/user/login/phone',
//         null,
//         {
//             phone: '13910193970',
//             code: md5(resp.data.verifyCode + '_csc', 32),
//             systemCode: '9001',
//         }, 'nullData',
//     ).then(response => {
//         console.error('response', response);
//         let professions = response.data;
//         let mainProfession = professions[APPCONSTANTS.main.code];
//         user.setEncUser(mainProfession.users.userId, APPCONSTANTS.main.code, mainProfession);
//     }).catch(err => {
//         console.error(err);
//     });
// }).catch(err => {
//     console.error(err);
// });
// storage.set(`${APPCONSTANTS.main.code}-userid`, '');
user.getUser().then((user) => {
    alert(JSON.stringify(user));
});

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
