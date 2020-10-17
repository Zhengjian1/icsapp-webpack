import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import '../commoncss/reset.css';
import Layout from './layout/index';

if (module && module.hot) {
    module.hot.accept();
}

console.log('config/constant下配置的常量', process.NODE_ENV);

ReactDOM.render(<Layout />, document.querySelector('#root'));
