function CategoryFilter({ onFilter }) {
  const categories = ["Food", "Transport", "Electricity", "Bills", "Rent", "Entertainment", "Others", "All" ];

  return (
    <div className="category-filter">
      {categories.map((category
      ) => (
        <button key={category} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
