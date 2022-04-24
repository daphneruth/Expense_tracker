import '../components/ExpenseStyling.css';

function ExpenseItem() {

  const expenseDate = new Date(2022, 3, 24);
  const expenseName = "Car Insurance";
  const expensePrice = 300;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2></div>
      <div className="expense-item__price">${expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
