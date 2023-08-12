import React, { useState } from 'react';

function Comprehension() {
  const [comprehension, setComprehension] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: [''] },
  ]);

  const handleQuestionChange = (index, questionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = questionText;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, optionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = optionText;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: [''] }]);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push('');
    setQuestions(updatedQuestions);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Comprehension Builder</h2>
      <div className="comprehension mb-4">
        <textarea
          value={comprehension}
          onChange={(e) => setComprehension(e.target.value)}
          className="border p-2 rounded-md w-full h-40 focus:outline-none focus:ring focus:border-black-500"
          placeholder="Enter comprehension passage..."
        />
      </div>
      <div className="questions">
        <h3 className="text-lg font-semibold mb-2">Questions:</h3>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question border p-4 rounded-md mb-4">
            <input
              type="text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(questionIndex, e.target.value)
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring focus:border-black-500"
              placeholder={`Enter question ${questionIndex + 1}...`}
            />
            <div className="options mt-2">
              <h4 className="text-lg font-semibold mb-2">Options:</h4>
              {question.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  className="border p-2 rounded-md w-full focus:outline-none focus:ring focus:border-black-500"
                  placeholder={`Enter option ${optionIndex + 1}...`}
                />
              ))}
              <button
                onClick={() => handleAddOption(questionIndex)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
              >
                Add Option
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}

export default Comprehension;
 