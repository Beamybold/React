
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="expense-list">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ExpenseList;
