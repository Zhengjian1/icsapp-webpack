import '@babel/polyfill';
import '../commoncss/reset.css';
import { lazy } from 'react';
import connectDvaAndHot from '@/utils/connectDvaAndHot';
import modal from './model';

const Layout = lazy(() => import('./layout/index'));

connectDvaAndHot({
    modal,
    lazyCompentent: Layout,
});
