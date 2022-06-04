# Components
- react components can defines as functions or as classes.
As a function: ` const App () => {`
                      ` return;`
                 `}`
 As a class: `class App extends React.Components{`
            `render() {`
            `return`

            `}`
 }                

# Props
- props enable passing of attributes to custom elements. They are objects that hold information to control the behavior of that particular component.

# States
- Objects that hold some information that may change over the lifetime of  component.They are not updated explicitly for state will not be ble to detect changes made.

- setState() method is used.This method has two constant return values : example

const [title, setTitle] = useState(props.title);

# Lifting state up

- Lifting up the State: Every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

- Example :
- parent component - APP.JS
- data generated - NewExpense.Js
- data required - expense.Js

 - Data from newExpense.js file is lifted up to App.js file and through props is passed to expense.js file.

 # controlled vs uncontrolled components

- Whenever we use two way binding, this way we are contolling the omponent 
 example:   <ExpensesFilter selected = {filteredYear} onChangeFilter ={filterChangeHandler}/>

 # stateless components
 - This are components that does not perform or contain any state.they act as presentational components .
 example : ExpenseItem file.

 # Conditional return statements

 - example using IF:
 -     if (props.items.length === 0) {
            return <h2 className='expenses-list__fallback'>Found no Expenses</h2>
        }

  return (
  <ul className="expenses-list">
 {props.items.map( (expense) => (
         <ExpenseItem
               key = {expense.id}
               title = {expense.title}
               amount={expense.amount}
               date={expense.date}
               />

 ))
}

 </ul>
 )






