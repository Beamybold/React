import { useState } from "react";
import FormatNaira from "./FormatNaira";

function BudgetTracker({ budget, totalSpent, onSetBudget }) {
  const [input, setInput] = useState("");

 

  const warning = totalSpent > budget * 0.8;
  const remaining = budget - totalSpent;

  function handleSubmit(e) {
    e.preventDefault();
    if (input <= 0) return;
    onSetBudget(parseFloat(input));
    setInput("");
  }

  return (
    <div className="budget-tracker">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Set Budget (₦)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Set</button>
      </form>
      <p>Remaining: {FormatNaira(remaining)}</p>
      {warning && <p className="warning"> You have spent over 80% of your budget!</p>}
    </div>
  );
}

export default BudgetTracker;
