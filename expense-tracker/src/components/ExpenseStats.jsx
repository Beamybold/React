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

export default ExpenseStats;