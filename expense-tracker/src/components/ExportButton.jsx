function ExportButton({ expenses, income }) {
  const handleExport = () => {
    console.log('Expenses:', JSON.stringify(expenses, null, 2));
    console.log('Income:', JSON.stringify(income, null, 2));
  };

  return <button onClick={handleExport}>Export to Console</button>;
}

export default ExportButton;