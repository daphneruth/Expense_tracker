import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
   setfilteredYear(selectedYear);
 };

 const ExpenseList = (props) => {
  const filteredExpenses =props.items.filter((expense) => {

      return expense.date.getFullYear().toString() === filteredYear;
      })
    };

 
  
 

 return (
  <div>
    <Card className = "expenses">

      <ExpensesFilter
       selected= {filteredYear} 
       onChangeFilter={filterChangeHandler}
       />

     <ExpenseList/>
      
      </Card>
      </div>
    
  );
}

export default Expenses;
