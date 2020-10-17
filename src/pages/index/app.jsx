import '@babel/polyfill';
import React from 'react';
import '../commoncss/reset.css';
import Layout from './layout/index';
import dva from '../../dva/';
import modal from './model';

const app = dva();

app.model(modal);

app.start({
    Layout: <Layout />,
});
