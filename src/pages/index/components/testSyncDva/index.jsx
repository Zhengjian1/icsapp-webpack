import React from 'react';
import { Card } from 'antd-mobile';
import { useSelector, useDispatch } from 'react-redux';
import ErrorBoundary from '@/components/errorBoundary';

function TestSyncDva() {
    const { count } = useSelector((state) => state.index);
    const dispatch = useDispatch();

    return (
        <Card full>
            <Card.Header title="数据管理同步测试" extra={<span>hooks写法</span>} />
            <Card.Body>
                <div>{count}</div>
                <button
                    key="add"
                    onClick={() => {
                        dispatch({ type: 'add' });
                    }}>
                    +
                </button>
                <button
                    key="minus"
                    onClick={() => {
                        dispatch({ type: 'minus' });
                    }}>
                    -
                </button>
            </Card.Body>
        </Card>
    );
}

export default ErrorBoundary(TestSyncDva);
