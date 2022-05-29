import React, {useState} from "react";

import "./App.css";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

 
   
  const  undefExpenses = [
    { title: " Car Insurance", 
    amount: 300, 
    date: new Date(2022, 4, 24) },

    { title: "Health Insurance", 
    amount: 450,
     date: new Date(2022, 5, 25) },

    { title: "House Insurance",
     amount: 200,
     date: new Date(2022, 7, 27) },

    { title: "General Insurance", 
    amount: 600,
     date: new Date(2023, 9, 30) },
  ];

  

  const App = () => {

 const [expenses, setExpenses] = useState(undefExpenses);

 //setExpenses();
//updating state 
 const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) =>{
     return [expense, ...prevExpenses];
   });
 };

  return (
    <div>
     <NewExpense onAddExpense = {addExpenseHandler  } />
      
      <Expenses items ={expenses} />
    </div>
  );
}
export default App;
