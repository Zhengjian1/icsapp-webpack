import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '@/models/home';
import { common_height, getPassData } from '../../utils/height_utils';
import storage from '../../storage/storage';

const Layout = lazy(() => import('./layout/index'));
console.error(`2020年10月22日14:01:13`);

common_height();

storage.set('test', 'test').then(() => {
    storage.get('test').then((result) => {
        console.error(result);
        // alert(result);
    });
});

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
