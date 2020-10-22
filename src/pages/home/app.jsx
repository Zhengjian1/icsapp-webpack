import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '@/models/home';
import ApiRequest from '../../http/requests/api-request';
import md5 from 'js-md5';
import { getPassData } from '../../utils/height_utils';
import storage from '../../storage/storage';

const Layout = lazy(() => import('./layout/index'));
console.error(`2020年10月22日14:01:13`);
getPassData()
    .then((passData) => {
        console.error(passData);
    })
    .catch((e) => {
        console.error('获取高度失败:', e);
    });

storage.set('test', 'test').then(() => {
    storage.get('test').then((result) => {
        alert(result);
    });
});

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
