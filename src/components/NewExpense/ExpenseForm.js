import React, {useState} from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import './ExpenseForm.css';

const ExpenseForm = () => {
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
            amount: inputAmount,
            date: new Date(inputDate)
        };
        console.log(ExpenseData);

        setInputedTitle('');
        setInputedAmount('');
        setInputedDate('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={handleTitleInput} value={inputTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={handleAmountInput} value={inputAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={handleDateInput} value={inputDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;