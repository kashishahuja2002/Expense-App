import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [Year, SelectYear] = useState('2022');

    const handleSelectYear = (year) => {
        SelectYear(year);
    }
    
    const filteredExpenses = (props.expenseItem.filter(expense => expense.date.getFullYear() == Year));

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectYear={handleSelectYear}></ExpensesFilter>
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;