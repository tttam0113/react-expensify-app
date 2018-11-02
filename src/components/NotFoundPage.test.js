import React from 'react';
import {shallow} from 'enzyme';

import NotFoundPage from './NotFoundPage';

test('should render Header correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});