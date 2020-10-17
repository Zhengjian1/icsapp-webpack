import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import style from './index.css';
import { connect } from 'react-redux';

const { hostname } = process.NODE_ENV;

function TestFixer({ count, dispatch }) {
    return (
        <div className={style.wrap}>
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header title="测试flex自动加前缀和样式" extra={<span>this is extra</span>} />
                    <Card.Body>
                        <div className={style.test}>测试flex前缀和样式</div>
                        <div className={style.loc_title}>使用局部title样式</div>
                        <div className={style.global_title}>使用全局title样式</div>
                    </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header title="数据管理测试" extra={<span>this is extra</span>} />
                    <Card.Body>
                        <div>{count}</div>
                        <button
                            key="add"
                            onClick={() => {
                                dispatch({ type: 'count/add' });
                            }}>
                            +
                        </button>
                        <button
                            key="minus"
                            onClick={() => {
                                dispatch({ type: 'count/minus' });
                            }}>
                            -
                        </button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default connect(({ count }) => ({ count }))(TestFixer);
