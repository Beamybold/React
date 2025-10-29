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

export default ExpenseList;