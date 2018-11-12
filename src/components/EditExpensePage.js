import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseRemoveConfirmation from './ExpenseRemoveConfirmation';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        cfmModalOpen: false
    };

    onSubmit = expense => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        this.onCancelClick();
    };

    onCancelClick = () => {
        this.setState(() => ({
            cfmModalOpen: false
        }));
    };

    showConfirmation = () => {
        this.setState(() => ({
            cfmModalOpen: true
        }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        // onClick={this.onRemoveClick}
                        onClick={this.showConfirmation}
                    >
                        Remove Expense
                    </button>
                </div>

                <ExpenseRemoveConfirmation
                    isOpen={this.state.cfmModalOpen}
                    expense={this.props.expense}
                    onCancelClick={this.onCancelClick}
                    onRemoveClick={this.onRemoveClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(
        expense => expense.id === props.match.params.id
    )
});

const mapDispatchToProps = dispatch => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditExpensePage);
