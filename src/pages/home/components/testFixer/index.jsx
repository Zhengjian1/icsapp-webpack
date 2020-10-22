import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import style from './index.css';

function TestFixer() {
    return (
        <>
            <WhiteSpace size="lg" />

            <div className={style.wrap}>test</div>
            <Card full>
                <Card.Header title="测试flex自动加前缀和样式" extra={<span>this is extra</span>} />
                <Card.Body>
                    <div className={style.loc_title}>使用局部title样式</div>
                    <div className={style.global_title}>使用全局title样式</div>
                </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
        </>
    );
}

export default TestFixer;
