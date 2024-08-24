import React, { useState } from 'react';
import './InputBox.css'; // Create a CSS file for styling

function InputBox() {
  const [text, setText] = useState('');
  const [lineCount, setLineCount] = useState(1);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const newLineCount = inputText.split('\n').length;
    setLineCount(newLineCount);
  };

  return (
    <div className="input-box">
      <div className="line-numbers">
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index} className="line-number">
            {index + 1}
          </div>
        ))}
      </div>
      <textarea
        className="input-text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type or paste your text here..."
      />
    </div>
  );
}

export default InputBox;
