import React, { useState, useEffect } from 'react';
import './UniversityDirectory.css';

function UniversityDirectory() {
  const [universities, setUniversities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchUniversities() {
    setLoading(true);
    setError(null);

    fetch('http://universities.hipolabs.com/search?country=Nigeria')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch universities');
        }
        return response.json();
      })
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setUniversities(sorted);
        setFiltered(sorted);
      })
      .catch((err) => {
        setError(err.message);
        setUniversities([]);
        setFiltered([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleSearch(event) {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredList = universities.filter((uni) =>
      uni.name.toLowerCase().includes(term)
    );
    setFiltered(filteredList);
  }

  useEffect(() => {
    fetchUniversities();
  }, []);

  return (
    <div className="directory-container">
      <h2>🎓 Nigerian Universities</h2>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <>
          <p>Showing {filtered.length} universities</p>
          <ul className="university-list">
            {filtered.map((uni, index) => (
              <li key={index} className="university-item">
                <strong>{uni.name}</strong>
                <div>{uni['state-province'] || 'N/A'}</div>
                <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                  🔗 {uni.web_pages[0]}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UniversityDirectory;
