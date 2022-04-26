import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(expensesProps){
 return(
    <div>
      <ExpenseItem
        title={expensesProps.expensesData[0].title}
        amount={expensesProps.expensesData[0].amount}
        date={expensesProps.expensesData[0].date}
      />
      <ExpenseItem
        title={expensesProps.expensesData[1].title}
        amount={expensesProps.expensesData[1].amount}
        date={expensesProps.expensesData[1].date}
      />
      <ExpenseItem
        title={expensesProps.expensesData[2].title}
        amount={expensesProps.expensesData[2].amount}
        date={expensesProps.expensesData[2].date}
      />
      <ExpenseItem
        title={expensesProps.expensesData[3].title}
        amount={expensesProps.expensesData[3].amount}
        date={expensesProps.expensesData[3].date}
      />
    </div>
  );
}

export default Expenses;
