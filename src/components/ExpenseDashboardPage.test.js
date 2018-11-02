import React from 'react';
import {shallow} from 'enzyme';

import ExpenseDashboardPage from './ExpenseDashboardPage';

test('should render Header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});