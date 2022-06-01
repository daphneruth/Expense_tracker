import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    
   let expenseContent = <p>No Expenses found</p>
    
        if (filteredExpenses.length > 0) {
         expenseContent = filteredExpenses.map( (expense) =>(
         <ExpenseItem
               key = {expense.id}
               title = {expense.title}
               amount={expense.amount}
               date = {expense.date}
             />  
         ) )  
}
}
export default ExpenseList;
