import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputTitle, setInputedTitle] = useState('');
    const [inputAmount, setInputedAmount] = useState('');
    const [inputDate, setInputedDate] = useState('');

    const handleTitleInput = (e) => {
        setInputedTitle(e.target.value);
    }; 

    const handleAmountInput = (e) => {
        setInputedAmount(e.target.value);
    }; 

    const handleDateInput = (e) => {
        setInputedDate(e.target.value);
    }; 

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        };

        props.onSubmitAddExpense(ExpenseData);

        setInputedTitle('');
        setInputedAmount('');
        setInputedDate('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={handleTitleInput} value={inputTitle} required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={handleAmountInput} value={inputAmount} required />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={handleDateInput} value={inputDate} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;