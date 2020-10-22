import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

class DefaultLayout extends React.Component {
    static propTypes = {
        args: PropTypes.object,
    };

    render() {
        const { NavHeight } = this.props.args || {};
        return (
            <div className={style.app}>
                <div className={style.battery}> 我是电池栏</div>
                {NavHeight && <NavHeight />}
                <div className={style.content}>{this.props.children}</div>
                <div className={style.footer}>我是footer </div>
            </div>
        );
    }
}

const WrapLayout = (WrappedComponent) => (args) => {
    return class extends React.PureComponent {
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
