export default (expenses = []) => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // return expenses
    //     .map(expense => expense.amount)
    //     .reduce((sum, value) => sum + value, 0);
};
