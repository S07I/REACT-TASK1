import React, { useState } from 'react';

function Wordcounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    if (text.trim() === '') {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter-container">
        <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word count: {countWords()}</p>
    </div>
  );
}

export default Wordcounter;
