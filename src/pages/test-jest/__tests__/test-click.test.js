import React from 'react';
import TextClick from '../components/test-click/index';

describe('test suite: Test component', () => {
    it('case: expect input & click operation correct', () => {
        const wrapper = mount(<TextClick />);

        const input = wrapper.find('input').at(0);
        const button = wrapper.find('button').at(0);

        expect(input.exists());
        expect(button.exists());

        input.simulate('change', {
            target: {
                value: 'lucas',
            },
        });

        expect(wrapper.state('value')).toBe('lucas');

        button.simulate('click');

        expect(wrapper.state('value')).toBe('');
    });
});
