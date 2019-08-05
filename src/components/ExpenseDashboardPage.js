import React from "react";
import ExpenseList from './ExpenseList';
import ExpensesTotal from './ExpensesTotal';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesTotal />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;