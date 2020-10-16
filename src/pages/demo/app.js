import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import '../commoncss/reset.css';
import Layout from './layout/index';

if (module && module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Layout />, document.querySelector('#root'));
