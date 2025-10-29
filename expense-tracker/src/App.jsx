import { useState } from 'react';
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
  const [categoryFilter, setCategoryFilter] = useState("All");
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
