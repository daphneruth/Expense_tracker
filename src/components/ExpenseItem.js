import '../components/ExpenseStyling.css';

function ExpenseItem(props) {

  //const expenseDate = new Date(2022, 3, 24);
  //const expenseName = "Car Insurance";
  //const expensePrice = 300;
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.toLocaleString('en-US', {day: '2-digit'});
  const day = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      </div>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2></div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
