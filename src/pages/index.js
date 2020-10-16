import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/components/APP/App'
import "lib-flexible"
import 'antd-mobile/dist/antd-mobile.css';

if (module && module.hot) {
    module.hot.accept()
}

console.log("配置的常量",process.NODE_ENV)

ReactDOM.render(<App />, document.querySelector('#root'))
