import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
import { common_height } from '../../utils/height_utils';

class DefaultLayout extends React.Component {
    static propTypes = {
        args: PropTypes.object,
    };

    static defaultProps = {
        args: {},
    };

    state = {
        passData: common_height(),
    };

    render() {
        console.error(this.state);
        const { NavHeight } = this.props.args || {};
        return (
            <div className="app">
                {/* 电池栏 */}
                <div className={`height${this.state.passData.height}`} />
                {/* 导航栏 */}
                {NavHeight && <NavHeight />}
                {/* 页面content */}
                <div className="content">{this.props.children}</div>
                {/* 适配isIphonex */}
                {this.state.passData.iPhoneX && <div className="height40 footer" style={{ background: 'red' }} />}
            </div>
        );
    }
}

const WrapLayout = (args) => (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <DefaultLayout args={args}>
                    <WrappedComponent {...this.props} />
                </DefaultLayout>
            );
        }
    };
};

export { WrapLayout };
export default WrapLayout;
