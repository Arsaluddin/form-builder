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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Fill in the Blank</h2>
      <div className="flex mb-4">
        <div
          className="blank p-4 border rounded-md bg-gray-100 mr-4 flex-grow"
          onDragOver={handleBlankDragOver}
          onDrop={handleBlankDrop}
        >
          {sentence.split('___').map((part, index) => (
            <span key={index}>
              {part}
              {index !== sentence.split('___').length - 1 && (
                <span className="blank-placeholder text-blue-500">___</span>
              )}
            </span>
          ))}
        </div>
        <div className="options p-4 border rounded-md bg-gray-100 flex-grow">
          <h3 className="text-lg font-semibold mb-2">Options:</h3>
          {options.map((option, index) => (
            <div
              key={index}
              className="option mb-2 px-2 py-1 border rounded-md bg-white cursor-pointer"
              draggable
              onDragStart={(event) => handleOptionDragStart(event, option)}
            >
              {option}
            </div>
          ))}
          <button
            onClick={handleAddOption}
            className="add-option bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
          >
            Add Option
          </button>
        </div>
      </div>
      <div className="input-question">
        <h3 className="text-lg font-semibold mt-4">Enter Your Question:</h3>
        <input
          type="text"
          value={sentence}
          onChange={handleInputChange}
          className="border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-black-500"
          placeholder="Enter a question with ___ as the blank"
        />
      </div>
    </div>
  );
}

export default Cloze;
