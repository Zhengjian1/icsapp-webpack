import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import renderAPP from '@/utils/renderAPP';
import home from '../../models/home';

const Layout = lazy(() => import('./layout/index'));

renderAPP({
    modals: [home],
    lazyCompentent: Layout,
});
