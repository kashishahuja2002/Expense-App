import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formState,setFormState] = useState(false);

    const handleFormState = () => {
        setFormState(true);
    }

    const handleFormCancle = () => {
        setFormState(false);
    }

    const handleSubmitAddExpense = (inputExpense) => {
        const inputExpenseData = {
            ...inputExpense,
            id: Math.random().toString()
        }

        props.onNewExpense(inputExpense);
        setFormState(false);
    }

    return (
        <div className="new-expense">
            {!formState && <button onClick={handleFormState}>Add New Expense</button>}
            {formState && <ExpenseForm 
                    onSubmitAddExpense={handleSubmitAddExpense} 
                    onCancle={handleFormCancle} 
                />
            }
        </div>
    )
}

export default NewExpense;