import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import demo from '@/models/demo';
import common from '@/models/common';

const Layout = lazy(() => import('./layout/index'));

renderAPP({
    modals: [demo, common],
    lazyCompentent: Layout,
});
