import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

//const [enteredTitle, setEnteredTitle] = useState('');
//const [enteredAmount, setEnteredAmount] = useState('');
//const [enteredDate, setEnteredDate] = useState('');

const [userInput, setUserInput ] = useState({
    enteredTitle,
    enteredAmount,
    enteredDate 
})

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const datetHandler = (event) => {
        setEnteredDate(event.target.value)
    }


  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-30"onChange={datetHandle} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;