import { useState } from "react";

function IncomeTracker({ onAddIncome }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (amount <= 0) return;

    onAddIncome({
      id: Date.now(),
      amount: parseFloat(amount),
      date: new Date().toISOString().split("T")[0],
    });

    setAmount("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Add Income (₦)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
}

export default IncomeTracker;
