import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
   setfilteredYear(selectedYear);
 };

 const filteredExpenses =props.items.filter((expense) => {

 return expense.date.getFullYear().toString() === filteredYear;
 });

 return(
  <div>
    <Card className = "expenses">

      <ExpensesFilter
       selected= {filteredYear} 
       onChangeFilter={filterChangeHandler}

       />
       {filteredExpenses.length === 0 ? (<p>No Expenses found</p>) }
      {filteredExpenses.length > 0  &&

       filteredExpenses.map( (expense) =>(
       <ExpenseItem
        key = {expense.id}
        title = {expense.title}
        amount={expense.amount}
        date = {expense.date}
      />
       ))  
    )}
       
     
      
      </Card>
      </div>
    
  );
}

export default Expenses;
