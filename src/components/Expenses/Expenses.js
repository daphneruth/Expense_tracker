import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (Props) => {

  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
   setfilteredYear(selectedYear);
 }

 const filteredExpenses = Props.items.filter(expense => {
  return expense.data.getFullYear().toString() === filteredYear;
 });

 return(
  <div>
    <Card className = "expenses">
      <ExpensesFilter selected= {filteredYear} onChangeFilter={filterChangeHandler}/>
      
       {Props.items.map((expense) =>(
       <ExpenseItem
       key = {expense.id}
       title = {expense.title}
      amount={expense.amount}
      date = {expense.date}
      />
    ))}
     
      
      </Card>
      </div>
    
  );
}

export default Expenses;
