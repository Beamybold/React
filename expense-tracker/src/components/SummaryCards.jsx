function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const categories = ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

  return (
    <div className="summary-cards">
      {categories.map(cat => {
        const catTotal = expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0);
        const percent = total ? ((catTotal / total) * 100).toFixed(1) : 0;
        return (
          <div key={cat} className={`card ${cat.toLowerCase()}`}>
            <h4>{cat}</h4>
            <p>₦{catTotal}</p>
            <p>{percent}%</p>
          </div>
        );
      })}
    </div>
  );
}
export default SummaryCards;