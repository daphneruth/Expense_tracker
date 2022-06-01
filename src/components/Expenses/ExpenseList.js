import React from "react";
import ExpenseItem from "./ExpenseItem";


   let expenseContent = <p>No Expenses found</p>
    
        if (props.items.length > 0) {
         expenseContent =props.items.map( (expense) =>(
         <ExpenseItem
               key = {expense.id}
               title = {expense.title}
               amount={expense.amount}
               date = {expense.date}
             />  
         ) )  
}
 
export default ExpenseList;
