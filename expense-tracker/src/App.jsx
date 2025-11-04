import  { useState } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseStats from "./components/ExpenseStats";
import ExpenseList from "./components/ExpenseList";
import BudgetTracker from "./components/BudgetTracker";
import IncomeTracker from "./components/IncomeTracker";
import DateFilter from "./components/DateFilter";
import ExportButton from "./components/ExportButton";
import SummaryCards from "./components/SummaryCards";
import "./ExpenseTracker.css";

function App() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState({ from: null, to: null });

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = income.reduce((sum, i) => sum + i.amount, 0);
  const balance = totalIncome - totalSpent;

  const filteredExpenses = expenses.filter((e) => {
    const matchesCategory = categoryFilter === "All" || e.category === categoryFilter;
    const date = new Date(e.date);
    const matchesDate =
      (!dateFilter.from || date >= new Date(dateFilter.from)) &&
      (!dateFilter.to || date <= new Date(dateFilter.to));
    return matchesCategory && matchesDate;
  });

  function handleAddExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function handleEditExpense(id, updatedFields) {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updatedFields } : e))
    );
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  function handleAddIncome(entry) {
    setIncome((prev) => [...prev, entry]);
  }

  function handleSetBudget(amount) {
    setBudget(amount);
  }

  function handleCategoryFilter(category) {
    setCategoryFilter(category);
  }

  function handleDateFilter(from, to) {
    setDateFilter({ from, to });
  }

  return (
    <div className="app-container">
      <Header />
      <div className="top-section">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <IncomeTracker onAddIncome={handleAddIncome} />
        <BudgetTracker
          budget={budget}
          totalSpent={totalSpent}
          onSetBudget={handleSetBudget}
        />
      </div>

      <DateFilter onFilter={handleDateFilter} />
      <CategoryFilter onFilter={handleCategoryFilter} />
      <ExpenseStats expenses={filteredExpenses} />
      <SummaryCards expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDeleteExpense}
        onEdit={handleEditExpense}
      />
      <ExportButton expenses={expenses} income={income} budget={budget} />
      <div className="balance-display">
        <h3>Balance: ₦{balance.toLocaleString("en-NG")}</h3>
      </div>
    </div>
  );
}

export default App;
