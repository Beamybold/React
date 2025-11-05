import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteCount, setQuoteCount] = useState(0);

  function fetchQuote() {
    setLoading(true);
    setError(null);

    fetch('https://zenquotes.io/api/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0]);
        setQuoteCount((prev) => prev + 1);
      })
      .catch((err) => {
        setError(err.message);
        setQuote(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function copyQuote() {
    if (quote) {
      const text = `"${quote.q}" - ${quote.a}`;
      navigator.clipboard.writeText(text);
      alert('Quote copied to clipboard!');
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>💬 Daily Inspiration</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {quote && !loading && (
        <>
          <p className="quote-text">"{quote.q}"</p>
          <p className="quote-author">- {quote.a}</p>
          <p className="quote-meta">Length: {quote.q.length} characters</p>
          <p className="quote-meta">Quotes viewed: {quoteCount}</p>
        </>
      )}

      <div className="button-group">
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={copyQuote}>Copy Quote</button>
      </div>
    </div>
  );
}

export default QuoteGenerator;

