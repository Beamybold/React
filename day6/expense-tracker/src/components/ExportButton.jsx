

function ExportButton({ expenses, income, budget }) {
  function formatNaira(amount) {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  }

  function convertToCSV(title, data, headers) {
    const rows = data.map((row) =>
      headers.map((field) => `"${row[field] ?? ""}"`).join(",")
    );
    return [`\n${title}`, headers.join(","), ...rows].join("\n");
  }

  function downloadCSV(filename, content) {
  const BOM = "\uFEFF"; // UTF-8 BOM
  const blob = new Blob([BOM + content], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


  function handleExport() {
    const expenseData = expenses.map((e) => ({
      Description: e.description,
      Amount: formatNaira(e.amount),
      Category: e.category,
      Date: e.date,
    }));

    const incomeData = income.map((i) => ({
      Amount: formatNaira(i.amount),
      Date: i.date,
    }));

    const budgetData = [{ Budget: formatNaira(budget) }];

    const expenseCSV = convertToCSV("EXPENSES", expenseData, ["Description", "Amount", "Category", "Date"]);
    const incomeCSV = convertToCSV("INCOME", incomeData, ["Amount", "Date"]);
    const budgetCSV = convertToCSV("BUDGET", budgetData, ["Budget"]);

    const fullCSV = [expenseCSV, incomeCSV, budgetCSV].join("\n");

    downloadCSV("expense_tracker.csv", fullCSV);
  }

  return <button onClick={handleExport}>Download CSV</button>;
}

export default ExportButton;
