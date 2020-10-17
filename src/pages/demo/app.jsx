import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import '../commoncss/reset.css';
import Layout from './layout/index';

ReactDOM.render(<Layout />, document.querySelector('#root'));
