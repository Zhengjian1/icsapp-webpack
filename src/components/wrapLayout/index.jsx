import React from 'react';
import './index.less';
import { common_height } from '../../utils/height_utils';

class DefaultLayout extends React.Component {
    state = {
        passData: common_height(),
    };

    render() {
        return (
            <div className="app">
                {/* 电池栏 */}
                <div className={`height${this.state.passData.height}`} />
                {/* 页面content */}
                <div className="content">{this.props.children}</div>
                {/* 适配isIphonex */}
                {this.state.passData.iPhoneX && <div className="height40 footer" style={{ background: 'red' }} />}
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
