import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return dispatch => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        return database
            .ref('expenses')
            .push(expense)
            .then(ref => {
                dispatch(addExpense({ id: ref.key, ...expense }));
            });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//1.create startRemoveExpense 9same call signature as removeExpense)
//2.Test startRemoveExpense with "should remove expenses from firebase"
//3.Use startRemoveExpense in EditExpensePage instead of removeExpense
//4.Adjust EditExpensePage tests
export const startRemoveExpense = ({ id } = {}) => {
    return dispatch => {
        return database
            .ref(`expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

//1.fetch all expense data onse
//2. Parse that data into an array
//3. Dispatch SET_EXPENSES

export const startSetExpenses = () => {
    return dispatch => {
        return database
            .ref('expenses')
            .once('value')
            .then(snapshot => {
                const expenses = [];
                snapshot.forEach(childSnapshot => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setExpenses(expenses));
            });
    };
};
