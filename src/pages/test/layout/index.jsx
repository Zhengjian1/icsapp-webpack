import React from 'react';
import style from './index.css';
import { List } from 'antd-mobile';
import { WrapLayout } from '@/components/wrapLayout';
import { errorBoundary } from '@/components/errorBoundary';

@errorBoundary
@WrapLayout
export default class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={`${style.test}`}>
                <Asd />
            </div>
        );
    }
}

const Item = List.Item;
const count = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
];

class Asd extends React.Component {
    render() {
        return (
            <List>
                {count.map((item, index) => {
                    return (
                        <Item key={index} extra={'extra content'}>
                            {item}
                        </Item>
                    );
                })}
            </List>
        );
    }
}
