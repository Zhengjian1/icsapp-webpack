import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
import { getPassData } from '@/utils/height_utils';
import { BROWSER } from '@/utils/env';

class DefaultLayout extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            passData: {},
        };
    }
    static propTypes = {
        args: PropTypes.object,
    };

    async componentDidMount() {
        const { passData } = await getPassData();
        this.setState({
            passData,
        });
    }

    render() {
        const { passData = {} } = this.state;
        const { NavHeight } = this.props.args || {};
        return (
            <div className="app">
                {/* 电池栏 */}
                <div className={`height${passData.height}`} />
                {/* 导航栏 */}
                {NavHeight && <NavHeight />}
                {/* 页面content */}
                <div className="content">{this.props.children}</div>
                {/* 适配isIphonex */}
                {BROWSER.versions.isIphonex && <div className="height34" />}
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
