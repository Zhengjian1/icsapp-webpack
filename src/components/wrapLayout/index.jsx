import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

class DefaultLayout extends React.Component {
    static propTypes = {
        args: PropTypes.object,
    };

    render() {
        const { header, footer } = this.props.args || {};
        return (
            <div className={style.app}>
                {header && <div className={style.header} />}
                <div className={style.content}>{this.props.children}</div>
                {footer && <div className={style.footer} />}
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
