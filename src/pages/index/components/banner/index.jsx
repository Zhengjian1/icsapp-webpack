import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import ErrorBoundary from '@/components/errorBoundary';

class Banner extends React.PureComponent {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    };
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={(index) => console.log('slide to', index)}>
                    {this.state.data.map((val) => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                            <img
                                src={require(`../../assets/${val}.png`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    // window.dispatchEvent(new Event('resize'));
                                    // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default ErrorBoundary(Banner);
