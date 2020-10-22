import React from 'react';
import style from './index.css';
import { BROWSER } from '../../../utils/env';
import { common_height } from '../../../utils/height_utils';

export default class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            test: 'test',
        };
    }

    componentDidMount() {
        common_height();
    }

    render() {
        return <div className={`${style[this.state.test]}`}>12312312312312312312</div>;
    }
}
