import React from 'react';
import style from './index.css';

const { hostname } = process.NODE_ENV;

function TestFixer() {
    return (
        <div className={style.wrap}>
            <div className={style.test}>测试flex是否自动加前缀和样式</div>
            <div className={style.loc_title}>使用局部title样式</div>
            <div className={style.global_title}>使用全局title样式</div>
            <div>电脑ip为{hostname}</div>
        </div>
    );
}

export default TestFixer;
