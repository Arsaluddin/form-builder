import React, { useState } from 'react';

function ComprehensionBuilder() {
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
    <div>
      <h2>Comprehension Builder</h2>
      <div className="comprehension">
        <textarea
          value={comprehension}
          onChange={(e) => setComprehension(e.target.value)}
          placeholder="Enter comprehension passage..."
        />
      </div>
      <div className="questions">
        <h3>Questions:</h3>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <input
              type="text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(questionIndex, e.target.value)
              }
              placeholder={`Enter question ${questionIndex + 1}...`}
            />
            <div className="options">
              <h4>Options:</h4>
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
                  placeholder={`Enter option ${optionIndex + 1}...`}
                />
              ))}
              <button onClick={() => handleAddOption(questionIndex)}>
                Add Option
              </button>
            </div>
          </div>
        ))}
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
    </div>
  );
}

export default ComprehensionBuilder;
