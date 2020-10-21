import React, { PureComponent } from 'react';
import { Tabs } from 'antd-mobile';
import { connect } from 'react-redux';
import style from './nav.css';

@connect(({ common }) => ({ common }))
class Nav extends PureComponent {
    // componentDidMount() {
    //     const { fromPage, fetchPayload, dispatch } = this.props;

    //     dispatch({
    //         type: 'common/fetch',
    //         payload: {
    //             ...fetchPayload,
    //             fromPage,
    //         },
    //     });
    // }

    renderTabs = (data) => {
        return data.map((item) => (
            <div key={item} className={style.nav}>
                {item.title}内容
            </div>
        ));
    };

    render() {
        const { data } = this.props.common;
        return (
            <Tabs
                tabs={data}
                initialPage={0}
                onChange={(tab, index) => {
                    console.log('onChange', index, tab);
                }}
                onTabClick={(tab, index) => {
                    console.log('onTabClick', index, tab);
                }}>
                {this.renderTabs(data)}
            </Tabs>
        );
    }
}

export default Nav;
