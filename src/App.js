//import logo from './logo.svg';

import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: CarInsurance, amount: 300, date: new Date(2022, 4, 24) },
    { title: HealthInsurance, amount: 450, date: new Date(2022, 5, 25) },
    { title: Housensurance, amount: 200, date: new Date(2022, 7, 27) },
    { title: GeneralInsurance, amount: 600, date: new Date(2023, 9, 30) },
  ];

  return (
    /*<div className="App">
      
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
      */

    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
