import React from 'react'
import ReactDOM from 'react-dom'
import "lib-flexible"


if (module && module.hot) {
    module.hot.accept()
}

ReactDOM.render(<div>demo页</div>, document.querySelector('#root'))
