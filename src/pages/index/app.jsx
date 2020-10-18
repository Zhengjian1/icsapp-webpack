import '@babel/polyfill';
import React from 'react';
import '../commoncss/reset.css';
import Layout from './layout/index';
import connectDva from '@/utils/connectDva';
import modal from './model';

connectDva(modal, {
    Layout: <Layout />,
});
