import React from 'react';
import style from './index.css';

function TestFixer() {
    return (
        <div className={style.wrap}>
            <div className={style.loc_title}>使用局部title</div>
            <div className={style.global_title}>使用全局title</div>
            测试flex是否自动加前缀
        </div>
    );
}

export default TestFixer;
