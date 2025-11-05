import React, { useState, useEffect } from 'react';

const DEFAULT_TITLE = 'React App';

function TitleUpdater() {
  const [customTitle, setCustomTitle] = useState('');
  const maxChars = 60;

  useEffect(function updateDocumentTitle() {
    if (customTitle) {
      document.title = DEFAULT_TITLE + ' - ' + customTitle;
    } else {
      document.title = DEFAULT_TITLE;
    }
  }, [customTitle]);

  function handleChange(event) {
    const value = event.target.value;
    if (value.length <= maxChars) {
      setCustomTitle(value);
    }
  }

  function handleReset() {
    setCustomTitle('');
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2> Document Title Updater</h2>
      <label>
        Custom Title:{' '}
        <input
          type="text"
          value={customTitle}
          onChange={handleChange}
          placeholder="Type here..."
          style={{ width: '300px', padding: '5px' }}
        />
      </label>
      <div style={{ marginTop: '10px' }}>
        <strong>Preview:</strong> "{customTitle ? DEFAULT_TITLE + ' - ' + customTitle : DEFAULT_TITLE}"
      </div>
      <div style={{ marginTop: '5px', color: customTitle.length >= maxChars ? 'red' : 'gray' }}>
        {customTitle.length}/{maxChars} characters
      </div>
      <button onClick={handleReset} style={{ marginTop: '15px', padding: '5px 10px' }}>
        Reset to Default
      </button>
    </div>
  );
}

export default TitleUpdater;
