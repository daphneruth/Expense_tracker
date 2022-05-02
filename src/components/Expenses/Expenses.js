import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

import Card from "../UI/Card";

const Expenses = (expensesProps) => {
 return(
    <Card>
      <ExpenseItem
        title={expensesProps.data[0].title}
        amount={expensesProps.data[0].amount}
        date={expensesProps.data[0].date}
      />
      <ExpenseItem
        title={expensesProps.data[1].title}
        amount={expensesProps.data[1].amount}
        date={expensesProps.data[1].date}
      />
      <ExpenseItem
        title={expensesProps.data[2].title}
        amount={expensesProps.data[2].amount}
        date={expensesProps.data[2].date}
      />
      <ExpenseItem
        title={expensesProps.data[3].title}
        amount={expensesProps.data[3].amount}
        date={expensesProps.data[3].date}
      />
    </Card>
  );
}

export default Expenses;
