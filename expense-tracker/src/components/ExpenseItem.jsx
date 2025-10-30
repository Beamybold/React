import { useState } from "react";
import FormatNaira from "./FormatNaira";      

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

    function handleSave() {
    onEdit(expense.id, { description: desc, amount: parseFloat(amt) });
    setIsEditing(false);
  }

  return (
    <div className={`expense-item ${expense.category.toLowerCase()}`}>
      {isEditing ? (
        <>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{expense.description}</span>
          <span>{FormatNaira(expense.amount)}</span>
          <span>{expense.category}</span>
          <span>{expense.date}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button className="delete" onClick={() => onDelete(expense.id)}>🗑️</button>
    </div>
  );
}

export default ExpenseItem;
