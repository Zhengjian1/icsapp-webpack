import React from 'react';
import { Card, Button, WhiteSpace } from 'antd-mobile';
import { useSelector, useDispatch } from 'react-redux';
import ErrorBoundary from '@/components/errorBoundary';
import style from './index.css';

function TestSyncDva() {
    const { count } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    return (
        <Card full>
            <Card.Header title="数据管理同步测试" extra={<span>hooks写法</span>} />
            <Card.Body>
                <div className={style.count}>{count}</div>
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch({ type: 'home/add' });
                    }}>
                    加1
                </Button>
                <WhiteSpace />
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch({ type: 'home/minus' });
                    }}>
                    减1
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ErrorBoundary(TestSyncDva);
