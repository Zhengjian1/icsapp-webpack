import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    static propTypes = {
        children: PropTypes.object,
    };

    state = {
        hasError: false,
    };

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        });

        error.message = `${error.message} - componentStack: ${info.componentStack}`;

        console.error('error', error);
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return 'UI已经出错';
        }

        return this.props.children;
    }
}

const errorBoundary = (WrappedComponent) => {
    return class extends React.PureComponent {
        render() {
            return (
                <ErrorBoundary>
                    <WrappedComponent {...this.props} />
                </ErrorBoundary>
            );
        }
    };
};

export { errorBoundary };
export default errorBoundary;
