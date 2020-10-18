import React from 'react';
import { Card } from 'antd-mobile';
import { connect } from 'react-redux';
import { List } from 'antd-mobile';

const Item = List.Item;
@connect(({ index }) => ({ index }))
class TestAsycDva extends React.PureComponent {
    componentDidMount() {
        this.props.dispatch({
            type: 'fetch',
            payload: {
                appType: 5,
                ts: 1602997115180,
            },
        });
    }

    render() {
        const { data } = this.props.index;
        return (
            <Card full>
                <Card.Header title="数据管理异步测试" extra={<span>类写法</span>} />
                <Card.Body>
                    <List renderHeader={() => 'Basic Style'} className="my-list">
                        {data.map((item) => (
                            <Item key={item.id} extra={'extra content'}>
                                {item.name}
                            </Item>
                        ))}
                    </List>
                </Card.Body>
            </Card>
        );
    }
}

export default TestAsycDva;
