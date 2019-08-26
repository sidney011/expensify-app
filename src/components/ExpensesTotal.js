import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpensesTotal = ({expensesCount, expensesTotal}) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesCount > 1 ? 'expenses' : 'expense'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesTotal: selectExpensesTotal(state.expenses),
        expensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesTotal);

