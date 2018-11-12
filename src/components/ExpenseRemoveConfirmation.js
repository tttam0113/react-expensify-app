import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseRemoveConfirmation = ({
    isOpen,
    expense,
    onRemoveClick,
    onCancelClick
}) => (
    <Modal
        className="modal"
        isOpen={isOpen}
        onRequestClose={onCancelClick}
        contentLabel="Remove Expense"
        closeTimeoutMS={200}
        ariaHideApp={false}
    >
        <h2 className="modal__title">Are you sure want to remove this expense?</h2>
        <div className="modal__body">
            <div>
                <h3 className="list-item__title">{expense.description}</h3>
                <span className="list-item__sub-title">
                    {moment(expense.createdAt).format('MMMM Do, YYYY')}
                </span>
            </div>

            <h3 className="list-item__data">
                {numeral(expense.amount / 100).format('$0,0.00')}
            </h3>
        </div>
        <div className="modal__actions">
            <button className="button" onClick={onCancelClick}>No</button>
            <button className="button button--alert" onClick={onRemoveClick}>Yes</button>
        </div>
    </Modal>
);

export default ExpenseRemoveConfirmation;
