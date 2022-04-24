import '../components/ExpenseStyling.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {



  return (
    <div className="expense-item">

      <ExpenseDate></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2></div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
