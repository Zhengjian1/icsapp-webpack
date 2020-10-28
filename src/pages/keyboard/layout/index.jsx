import React from 'react';
import style from './index.css';
import WrapLayout from '@/components/wrapLayout/index';
import ErrorBoundary from '@/components/errorBoundary/index';
import { InputItem } from 'antd-mobile';
import Field from '@alifd/field';

@ErrorBoundary
@WrapLayout
export default class Layout extends React.Component {
    field = new Field(this); // 实例创建

    submit = () => {
        const { getValues, getErrors } = this.field;
        console.log(getValues(), getErrors());
    };
    render() {
        const { init, getError } = this.field;
        return (
            <div className={style.wrap}>
                <InputItem
                    type="text"
                    placeholder="请输入标的代码"
                    clear
                    {...init('name', {
                        rules: [{ required: true }],
                        initValue: 'first value',
                    })}
                />
                {getError('name') && <div style={{ color: 'red' }}>{getError('name')}</div>}

                <InputItem
                    type="phone"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="请输入手机号"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
                <InputItem
                    type="bankCard"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="请输入银行卡"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
                <InputItem
                    type="password"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="密码"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />
                <InputItem
                    type="digit"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="num"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />

                <div className={style.extra}>其他表单。。。</div>
                <InputItem
                    type="money"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="请输入数字1111"
                    {...init('money1', {
                        rules: [{ required: true }, { minLength: 4 }],
                    })}
                    extra={'%'}
                />

                <InputItem
                    type="money"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="请输入数字222"
                    {...init('money2', {
                        rules: [{ required: true }, { minLength: 4 }],
                    })}
                    extra={'%'}
                />
                <div className={style.footer} onClick={this.submit}>
                    提交
                </div>
            </div>
        );
    }
}
