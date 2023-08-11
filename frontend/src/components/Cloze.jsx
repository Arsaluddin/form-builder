import React, { useState } from 'react';

function Cloze() {
  const [sentence, setSentence] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionDragStart = (event, option) => {
    event.dataTransfer.setData('text/plain', option);
    setSelectedOption(option);
  };

  const handleBlankDragOver = (event) => {
    event.preventDefault();
  };

  const handleBlankDrop = (event) => {
    event.preventDefault();
    const droppedOption = event.dataTransfer.getData('text/plain');
    const newSentence = sentence.replace('___', droppedOption);
    setSentence(newSentence);
    setSelectedOption(null);
  };

  const handleInputChange = (event) => {
    setSentence(event.target.value);
  };

  const handleAddOption = () => {
    const newOption = prompt('Enter an option:');
    if (newOption) {
      setOptions([...options, newOption]);
    }
  };

  return (
    <div>
      <h2>Fill in the Blank</h2>
      <div className="question">
        <div
          className="blank"
          onDragOver={handleBlankDragOver}
          onDrop={handleBlankDrop}
        >
          {sentence.split('___').map((part, index) => (
            <span key={index}>
              {part}
              {index !== sentence.split('___').length - 1 && (
                <span className="blank-placeholder">___</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="options">
        <h3>Options:</h3>
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            draggable
            onDragStart={(event) => handleOptionDragStart(event, option)}
          >
            {option}
          </div>
        ))}
        <button onClick={handleAddOption} className="add-option">
          Add Option
        </button>
      </div>
      <div className="input-question">
        <h3>Enter Your Question:</h3>
        <input
          type="text"
          value={sentence}
          onChange={handleInputChange}
          placeholder="Enter a question with ___ as the blank"
        />
      </div>
    </div>
  );
}

export default Cloze;
