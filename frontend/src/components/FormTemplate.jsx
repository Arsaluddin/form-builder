import React, { useState } from 'react';
import QuestionTemplate from './QuestionTemplate';
import { Link } from 'react-router-dom'

function FormTemplate() {
  const [formName, setFormName] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
      
    const newQuestion = {
      qid: new Date().getTime(), // Using timestamp as a unique ID
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleDeleteQuestion = (questionId) => {
    const updatedQuestions = questions.filter((question) => question.id !== questionId);
    setQuestions(updatedQuestions);
  };

  const handleCreateForm = async () => {
    try {
      const response = await fetch('http://localhost:5000/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formName,
          questions,
        }),
      });
      const data = await response.json();
      console.log('Form created:', data);
    } catch (error) {
      console.error('Error creating form:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 border rounded-lg ">
      <div className="flex-row bg-white rounded-lg shadow-md p-6">
        <input
          type="text"
          className="border-2 rounded-md p-2 w-full m-6 mx-4 focus:outline-none focus:ring focus:border-black-500"
          placeholder="form name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
        {questions.map((question) => (
          <QuestionTemplate
            key={question.qid}
            id={question.qid}
            deleteField={handleDeleteQuestion}
          />
        ))}
        <button
          className="border border-blue-500 m-5 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-black-500"
          onClick={handleAddQuestion}
        >
          Add Questions
        </button>
        <Link to='/'>
        <button
          className="border border-blue-500 m-5 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-black-500"
          onClick={handleCreateForm}
        >
          Create Form
        </button>
        </Link>
      </div>
    </div>
  );
}

export default FormTemplate;
 