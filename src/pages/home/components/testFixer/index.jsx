import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import style from './index.css';
import { router } from '@/src/router/router-base';

function TestFixer() {
    return (
        <>
            <WhiteSpace size="lg" />

            <div
                className={style.wrap}
                onClick={() => {
                    router().push('res-report-detail');
                    // router().open('88880002', 'allResearchService', null, 'allResearchService');
                }}>
                test test test
            </div>
            <div
                className={style.wrap}
                onClick={() => {
                    window.AlipayJSBridge.call('showLoading', {
                        text: '加载中...',
                    });
                    setTimeout(() => {
                        window.AlipayJSBridge.call('hideLoading');
                    }, 1000);
                }}>
                show
            </div>
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
