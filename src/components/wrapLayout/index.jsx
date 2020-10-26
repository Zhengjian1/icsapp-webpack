import React from 'react';
import style from './index.css';
import { common_height } from '../../utils/height_utils';

class DefaultLayout extends React.Component {
    state = {
        passData: common_height(),
    };

    render() {
        return (
            <div className={style.app}>
                {/* 电池栏 */}
                <div className={style[`height${this.state.passData.height}`]} />
                {/* 页面content */}
                <div className={style.content}>{this.props.children}</div>
                {/* 适配isIphonex */}
                {this.state.passData.iPhoneX && <div className={`${style.height40} ${style.footer}`} />}
            </div>
        );
    }
}

const WrapLayout = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <DefaultLayout>
                    <WrappedComponent {...this.props} />
                </DefaultLayout>
            );
        }
    };
};

export { WrapLayout };
export default WrapLayout;
