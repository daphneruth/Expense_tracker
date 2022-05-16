import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (Props) => {
  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
  }

 return(
  <div>
    <Card className = "expenses">
      <ExpensesFilter onChange ={filterChangeHandler}/>
      <ExpenseItem
        title={Props.data[0].title}
        amount={Props.data[0].amount}
        date={Props.data[0].date}
      />
      <ExpenseItem
        title={Props.data[1].title}
        amount={Props.data[1].amount}
        date={Props.data[1].date}
      />
      <ExpenseItem
        title={Props.data[2].title}
        amount={Props.data[2].amount}
        date={Props.data[2].date}
      />
      <ExpenseItem
        title={Props.data[3].title}
        amount={Props.data[3].amount}
        date={Props.data[3].date}
      />
      </Card>
      </div>
    
  );
}

export default Expenses;
