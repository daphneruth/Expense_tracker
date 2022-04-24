import '../components/ExpenseStyling.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>4/22/2022</div>
      <div className="expense-item__description">Car Insurance</div>
      <div className="expense-item__price">$300</div>
    </div>
  );
}

export default ExpenseItem;
