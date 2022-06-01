import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses ={filteredExpenses}/>

          <ExpenseList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
