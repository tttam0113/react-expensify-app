import React from 'react';
import { shallow } from 'enzyme';

import ExpenseRemoveConfirmation from './ExpenseRemoveConfirmation';
import expenses from '../tests/fixtures/expenses';

let onRemoveClick, onCancelClick, wrapper;

beforeEach(() => {
    onRemoveClick = jest.fn();
    onCancelClick = jest.fn();
    wrapper = shallow(
        <ExpenseRemoveConfirmation
            isOpen={true}
            onRemoveClick={onRemoveClick}
            onCancelClick={onCancelClick}
            expense={expenses[2]}
        />
    );
});

test('should render ExpenseRemoveConfirmation correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call onCancelClick when click outsite modal', () => {
    wrapper.find('Modal').prop('onRequestClose')();
    expect(onCancelClick).toHaveBeenCalled();
});

test('should call onCancelClick when click no button', () => {
    wrapper.find('button').first().simulate('click');
    expect(onCancelClick).toHaveBeenCalled();
});

test('should call onRemoveClick when click yes button', () => {
    wrapper.find('.button--alert').simulate('click');
    expect(onRemoveClick).toHaveBeenCalled();
});
