import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512312451} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 hidden expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} hiddenExpenseCount={1}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpensesSummary with multi hidden expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} hiddenExpenseCount={123}/>);
    expect(wrapper).toMatchSnapshot();
})
