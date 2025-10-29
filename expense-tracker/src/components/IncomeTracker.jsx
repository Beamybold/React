function IncomeTracker({ setIncome }) {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!source || amount <= 0) return;
    setIncome(prev => [...prev, { source, amount: parseFloat(amount) }]);
    setSource('');
    setAmount('');
  };

  return (
    <div>
      {/* Inputs for source and amount */}
    </div>
  );
}

export default IncomeTracker;