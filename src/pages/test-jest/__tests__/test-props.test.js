import React from 'react';
import TextProps from '../components/test-props/index';

describe('test suite: Test component', () => {
    it('case: expect Test render a div with className: test-container', () => {
        const wrapper = shallow(<TextProps />);

        expect(wrapper.find('.test-container').length).toEqual(1);
    });
});
