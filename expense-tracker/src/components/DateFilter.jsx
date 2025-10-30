import { useState } from "react";

function DateFilter({ onFilter }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleFilter() {
    onFilter(from, to);
  }

  return (
    <div className="date-filter">
      <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleFilter}>Sort</button>
    </div>
  );
}

export default DateFilter;
