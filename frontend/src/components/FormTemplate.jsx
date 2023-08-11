import React, { useState } from 'react'
import QuestionTemplate from './QuestionTemplate'



function FormTemplate() {

  const [QuestionCount , setQuestionCount] = useState([]);

  const handleQuestionCount = () => {
    const newQuestion = {
      id: new Date().getTime(), // Using timestamp as a unique ID
    };
    setQuestionCount([...QuestionCount, newQuestion]);
  };

  const deleteField = (idToDelete) => {
    const updatedQuestions = QuestionCount.filter(
      (question) => question.id !== idToDelete
    );
    setQuestionCount(updatedQuestions);
  };
  
  return (
    <div className='max-w-lg mx-auto my-8 border rounded-lg '>
       <div className='flex-row bg-white rounded-lg shadow-md p-6'>
         <input
          type="text"
          className="border-2 rounded-md p-2 w-full m-6 mx-4 focus:outline-none focus:ring focus:border-black-500"
          placeholder="form name"
         />
           {QuestionCount.map((question) => (
          <QuestionTemplate
            key={question.id}
            id={question.id}
            deleteField={deleteField}
          />
        ))}
          <button className="border border-blue-500 m-5 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-black-500" onClick={() => handleQuestionCount()}>
             Add Questions
          </button>
          <button className="border border-blue-500 m-5 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-black-500" >
             Create form 
          </button>
       </div>
    </div>
  )
}

export default FormTemplate