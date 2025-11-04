
function SummaryCards({ expenses }) {
  const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

   const categories = ["Food", "Transport", "Electricity", "Bills", "Rent", "Entertainment", "Others",];


  const categoryTotals = categories.map((category) => {
    const categorySum = expenses
      .filter((e) => e.category?.toLowerCase() === category.toLowerCase())
      .reduce((sum, e) => sum + Number(e.amount), 0);

    const percent = totalExpenses > 0
      ? ((categorySum / totalExpenses) * 100).toFixed(1)
      : "0.0";

    return {
      category,
      amount: categorySum,
      percent,
    };
  });

  return (
    <div className="summary-cards">
      {categoryTotals.map(({ category, amount, percent }) => (
        <div key={category} className={`summary-card ${category.toLowerCase()}`}>
          <h4>{category}</h4>
          <p>₦{amount.toLocaleString()}</p>
          <p>{percent}% of total</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
