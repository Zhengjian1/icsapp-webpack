import '@babel/polyfill';
import '@/pages/commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';

const Layout = lazy(() => import('./layout/index'));

renderAPP({
    // modals: [home],
    lazyCompentent: Layout,
});
