import React from 'react';
import ErrorBoundary from '@/components/errorBoundary';

class Demo extends React.PureComponent {
    state = {
        aa: { b: { c: 1 } },
    };

    a = { b: { c: 1 } };
    aa = {};

    handleClick = () => {
        // console.log(this.a.b.c);

        this.setState({
            aa: this.aa,
        });
    };

    render() {
        console.log(this.state.aa.b.c);

        return (
            <div
                style={{ background: '#000', color: '#ccc', width: '100px', height: '100px', fontSize: '20PX' }}
                title={this.state.aa.b.c}
                onClick={this.handleClick}>
                点我，我要报错！
            </div>
        );
    }
}

export default ErrorBoundary(Demo);
