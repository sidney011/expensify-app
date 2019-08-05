import React from 'react';
import { connect } from 'react-redux';
import ExpensesSum from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesTotal = (props) => (
    <div>
        <h2>Viewing {props.expensesCount} {props.expensesCount > 1 ? 'expenses' : 'expense'} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h2>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesTotal: ExpensesSum(state.expenses),
        expensesCount: state.expenses.length 
    };
};

export default connect(mapStateToProps)(ExpensesTotal);

