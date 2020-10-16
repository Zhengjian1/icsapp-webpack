import React from 'react';
import { List } from 'antd-mobile';
import './index.less';

const Item = List.Item;
const Brief = Item.Brief;

class ListExample extends React.PureComponent {
    state = {
        disabled: false,
    };

    render() {
        return (
            <div>
                <List renderHeader={() => 'Basic Style'} className="my-list">
                    <Item extra={'extra content'}>Title</Item>
                </List>
            </div>
        );
    }
}

export default ListExample;
