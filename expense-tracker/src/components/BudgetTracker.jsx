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

export default BudgetTracker;