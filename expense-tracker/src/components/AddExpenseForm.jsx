function AddExpenseForm({ setExpenses }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("BIlls");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || amount <= 0) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split("T")[0],
    };

    setExpenses(prev => [...prev, newExpense]);
    setDescription("");
    setAmount("");
    setCategory("Food")
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for description, amount, category */}
    </form>
  );
}

export default AddExpenseForm;