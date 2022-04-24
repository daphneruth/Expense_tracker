import '../components/ExpenseStyling.css';

function ExpenseItem(props) {

  //const expenseDate = new Date(2022, 3, 24);
  //const expenseName = "Car Insurance";
  //const expensePrice = 300;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2></div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
