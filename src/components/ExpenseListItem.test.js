import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../tests/fixtures/expenses';
import ExpenseListItem from './ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})