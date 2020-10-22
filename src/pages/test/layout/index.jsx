import React from 'react';
import style from './index.css';

export default class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            test: 'test',
        };
    }

    render() {
        return <div className={`${style[this.state.test]}`}>12312312312312312312</div>;
    }
}
