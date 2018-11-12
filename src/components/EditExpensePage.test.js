import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';
import expenses from '../tests/fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(
        expenses[2].id,
        expenses[2]
    );
});

// test('should handle removeExpense', () => {
//     wrapper.find('button').simulate('click');
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
// });

test('should show confirmation when click remove button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('cfmModalOpen')).toBe(true);
});

test('should close confirmation modal when click cancel button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('cfmModalOpen')).toBe(true);

    wrapper.find('ExpenseRemoveConfirmation').prop('onCancelClick')();
    expect(wrapper.state('cfmModalOpen')).toBe(false);
});

test('should handle removeExpense', () => {
    //open confirmation modal 
    wrapper.find('button').simulate('click');
    expect(wrapper.state('cfmModalOpen')).toBe(true);

    wrapper.find('ExpenseRemoveConfirmation').prop('onRemoveClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
    expect(wrapper.state('cfmModalOpen')).toBe(false);
});