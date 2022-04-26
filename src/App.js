//import logo from './logo.svg';

import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title:" Car Insurance", amount: 300, date: new Date(2022, 4, 24) },
    { title: "Health Insurance", amount: 450, date: new Date(2022, 5, 25) },
    { title: "House Insurance", amount: 200, date: new Date(2022, 7, 27) },
    { title: "General Insurance", amount: 600, date: new Date(2023, 9, 30) },
  ];

  return(
    <div>
      <Expenses expensesData={expenses}/>
    </div>
);
}

  
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



export default App;
