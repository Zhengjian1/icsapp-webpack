import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import Layout from './layout/';

if (module && module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Layout />, document.querySelector('#root'));
