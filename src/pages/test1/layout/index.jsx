import React from 'react';
import { common_height } from '@/utils/height_utils';
import { Button } from 'antd-mobile';
import ErrorBoundary from '@/components/errorBoundary';
import WrapLayout from '@/components/wrapLayout';
import { router } from '@/src/router/router-base';

@ErrorBoundary
@WrapLayout
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
        return (
            <Button
                onClick={() => {
                    router().push('res-report-detail');
                }}>
                push
            </Button>
        );
    }
}
