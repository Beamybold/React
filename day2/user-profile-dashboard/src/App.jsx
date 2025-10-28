src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── AddExpenseForm.jsx
│   ├── CategoryFilter.jsx
│   ├── ExpenseStats.jsx
│   ├── ExpenseList.jsx
│   │   └── ExpenseItem.jsx
│   ├── BudgetTracker.jsx
│   ├── IncomeTracker.jsx
│   ├── DateFilter.jsx
│   ├── SummaryCards.jsx
│   └── ExportButton.jsx
├── styles/
│   └── ExpenseTracker.css
└── utils/
    └── helpers.js




import React, { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import ExpenseStats from './components/ExpenseStats';
import ExpenseList from './components/ExpenseList';
import BudgetTracker from './components/BudgetTracker';
import IncomeTracker from './components/IncomeTracker';
import DateFilter from './components/DateFilter';
import SummaryCards from './components/SummaryCards';
import ExportButton from './components/ExportButton';
import './styles/ExpenseTracker.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [budget, setBudget] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState({ start: null, end: null });

  return (
    <div className="app-container">
      <Header />
      <AddExpenseForm setExpenses={setExpenses} />
      <IncomeTracker setIncome={setIncome} />
      <BudgetTracker budget={budget} setBudget={setBudget} expenses={expenses} />
      <DateFilter setDateFilter={setDateFilter} />
      <CategoryFilter setCategoryFilter={setCategoryFilter} />
      <ExpenseStats expenses={expenses} income={income} />
      <SummaryCards expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
        categoryFilter={categoryFilter}
        dateFilter={dateFilter}
      />
      <ExportButton expenses={expenses} income={income} />
    </div>
  );
}

export default App;




// /1. AddExpenseForm.jsx
// Validates input
// Adds new expense with current date

Adds new expense with current date
function AddExpenseForm({ setExpenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || amount <= 0) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    };

    setExpenses(prev => [...prev, newExpense]);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for description, amount, category */}
    </form>
  );
}


// ExpenseList.jsx + ExpenseItem.jsx
// Filters by category and date 
// Allows editing and deletingV

Allows editing and deleting
function ExpenseList({ expenses, setExpenses, categoryFilter, dateFilter }) {
  const filtered = expenses.filter(exp => {
    const matchCategory = categoryFilter === 'All' || exp.category === categoryFilter;
    const matchDate =
      (!dateFilter.start || new Date(exp.date) >= new Date(dateFilter.start)) &&
      (!dateFilter.end || new Date(exp.date) <= new Date(dateFilter.end));
    return matchCategory && matchDate;
  });

  return (
    <div>
      {filtered.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} setExpenses={setExpenses} />
      ))}
    </div>
  );
}


// 3. ExpenseStats.jsx
// Shows total, count, highest, breakdow
function ExpenseStats({ expenses, income }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = Math.max(...expenses.map(e => e.amount), 0);
  const count = expenses.length;
  const breakdown = {};

  expenses.forEach(e => {
    breakdown[e.category] = (breakdown[e.category] || 0) + e.amount;
  });

  return (
    <div>
      <p>Total Spent: ₦{total}</p>
      <p>Number of Expenses: {count}</p>
      <p>Highest Expense: ₦{highest}</p>
      {/* Breakdown per category */}
    </div>
  );
}




// 4. BudgetTracker.jsx
// Sets budget

// Warns at 80% usage

function BudgetTracker({ budget, setBudget, expenses }) {
  const spent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const warning = spent > 0.8 * budget;

  return (
    <div>
      <input type="number" value={budget} onChange={e => setBudget(+e.target.value)} />
      <p>Remaining: ₦{budget - spent}</p>
      {warning && <p className="warning">⚠️ You've spent over 80% of your budget!</p>}
    </div>
  );
}



// 5. IncomeTracker.jsx
// Adds income entries

// Calculates balance

function IncomeTracker({ setIncome }) {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!source || amount <= 0) return;
    setIncome(prev => [...prev, { source, amount: parseFloat(amount) }]);
    setSource('');
    setAmount('');
  };

  return (
    <div>
      {/* Inputs for source and amount */}
    </div>
  );
}


function ExportButton({ expenses, income }) {
  const handleExport = () => {
    console.log('Expenses:', JSON.stringify(expenses, null, 2));
    console.log('Income:', JSON.stringify(income, null, 2));
  };

  return <button onClick={handleExport}>Export to Console</button>;
}




function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const categories = ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

  return (
    <div className="summary-cards">
      {categories.map(cat => {
        const catTotal = expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0);
        const percent = total ? ((catTotal / total) * 100).toFixed(1) : 0;
        return (
          <div key={cat} className={`card ${cat.toLowerCase()}`}>
            <h4>{cat}</h4>
            <p>₦{catTotal}</p>
            <p>{percent}%</p>
          </div>
        );
      })}
    </div>
  );
}

