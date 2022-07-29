import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import expenses from './Expenses';
import Header from './components/Header';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import { Link } from "react-router-dom";
import Budget from './components/Budget';


function App() {

  const [expense, setExpense] = useState(expenses);

  const deleteExpenses = (id) => {
    let array1 = [...expense];
    let deleteExpense = array1.filter((exp) => exp.id !== id);
    setExpense(deleteExpense);
  };

  const addExpense = (input) => {
    let array2 = [...expense];
    array2.push({
      id: uuidv4(),
      name: input.name,
      frequency: input.frequency,
      cost: input.cost
    });
    setExpense(array2);
  };

  const [remaining, setRemaining] = useState('');
  const [spent, setSpent] = useState('');
  const [budget, setBudget] = useState('');

  const budgetMinusSumofExpenses = (budget) => {
    let array3 = [...expense];
    let sumOfExpenses = array3.reduce((add, i) => add + i.cost, 0);
    const remaining = budget - sumOfExpenses;
    setRemaining(remaining);
    setSpent(sumOfExpenses);
    setBudget(budget);
  };


  return (
    <>
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item">
          <Link className = 'nav-link' to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className = 'nav-link' to='/About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className = 'nav-link' to='/FreeTrial'>Free Trial</Link>
        </li>
      </ul>

      <div className = 'container'>
        <Header />
      </div>
      <div>
        <Budget allExpenses = {budgetMinusSumofExpenses} spent = {spent} budget = {budget} remaining = {remaining} />
      </div>
      <div>
        <ExpensesList expenses = {expense} del = {deleteExpenses}/>
      </div>
      <div>
        <AddExpenseForm add = {addExpense}/>
      </div>
    </>
  );
};

export default App;