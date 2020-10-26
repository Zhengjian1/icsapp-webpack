import React from 'react';
import style from './index.css';
import WrapLayout from '@/components/wrapLayout/index';
import ErrorBoundary from '@/components/errorBoundary/index';
import { InputItem } from 'antd-mobile';

@ErrorBoundary
@WrapLayout
export default class Layout extends React.Component {
    render() {
        return (
            <div className={style.wrap}>
                <InputItem
                    type="text"
                    placeholder="请输入标的代码"
                    clear
                    needScroll={'false'}
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                />

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
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    extra={'%'}
                />

                <InputItem
                    type="money"
                    autoAdjustHeight={true}
                    moneyKeyboardAlign={'left'}
                    placeholder="请输入数字222"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    extra={'%'}
                />
                <div className={style.footer}>footer</div>
            </div>
        );
    }
}
