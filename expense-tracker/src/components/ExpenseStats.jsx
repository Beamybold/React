import FormatNaira from "./FormatNaira";

function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = Math.max(0, ...expenses.map((e) => e.amount));
  const count = expenses.length;

  return (
    <div className="stats">
      <div>Total Spent: {FormatNaira(total)}</div>
      <div>Number of Expenses: {count}</div>
      <div>Highest Expense: {FormatNaira(highest)}</div>
    </div>
  );
}

export default ExpenseStats;
