import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';

let startLoginWithGoogle, startLoginWithFacebook, startLoginWithGithub, wrapper;
beforeEach(() => {
    startLoginWithGoogle = jest.fn();
    startLoginWithFacebook = jest.fn();
    startLoginWithGithub = jest.fn();
    wrapper = shallow(
        <LoginPage
            startLoginWithGoogle={startLoginWithGoogle}
            startLoginWithFacebook={startLoginWithFacebook}
            startLoginWithGithub={startLoginWithGithub}
        />
    );
});

test('should correcly render LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginWithGoogle on button google click', () => {
    wrapper.find('.button--google').simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
});

test('should call startLoginWithFacebook on button facebook click', () => {
    wrapper.find('.button--facebook').simulate('click');
    expect(startLoginWithFacebook).toHaveBeenCalled();
});

test('should call startLoginWithGithub on button facebook click', () => {
    wrapper.find('.button--github').simulate('click');
    expect(startLoginWithGithub).toHaveBeenCalled();
});
