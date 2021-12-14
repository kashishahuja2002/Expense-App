import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const handleSubmitAddExpense = (inputExpense) => {
        props.onNewExpense(inputExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitAddExpense={handleSubmitAddExpense}></ExpenseForm>
        </div>
    )
}

export default NewExpense;