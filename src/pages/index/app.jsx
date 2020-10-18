import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import modal from '@/models/index';

const Layout = lazy(() => import('./layout/index'));

renderAPP({
    modal,
    lazyCompentent: Layout,
});
