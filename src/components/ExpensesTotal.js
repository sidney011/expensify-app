import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpensesTotal = ({expensesCount, expensesTotal}) => (
    <div>
        <h2>Viewing {expensesCount} {expensesCount > 1 ? 'expenses' : 'expense'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h2>
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

