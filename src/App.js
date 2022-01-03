import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewExpense from "./components/NewExpense/NewExpense";

let dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Table (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  let [expenses, setExpenses] = useState(dummyExpenses);

  const handleNewExpense = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]; 
    });
  }; 

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense={handleNewExpense}></NewExpense> 
      <Expenses expenseItem={expenses} />
    </div>
  ); 
}

export default App;
