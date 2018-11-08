import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';
import { start } from 'repl';

test('should correcly render LoginPage', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
