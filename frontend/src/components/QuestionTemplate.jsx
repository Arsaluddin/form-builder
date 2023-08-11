import { useState } from "react";
import React  from 'react'
import Category from "./Category";
import Cloze from "./Cloze";
import Comprehension from "./Comprehension";

function QuestionTemplate( { id , deleteField}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [currentType, setCurrentType] = useState('');

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const renderQuestionType = () => {
        switch (currentType) {
          case 'Category':
            return <Category />;
          case 'Cloze':
            return <Cloze />;
          case 'Comprehension':
            return <Comprehension />;
          default:
            return null;
        }
      };

  return (
    <>
    <div className="bg-gray-100 p-6 rounded-md shadow-md flex-col items-center space-x-4 my-12">
    {/* <input
      type="text"
      className="border rounded-md py-2 px-3 w-48 focus:outline-none focus:ring focus:border-blue-500"
      placeholder="Enter text..."
    /> */}
    <div className="relative">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={toggleDropdown}>
        Type
      </button>
      <ul className={`absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md ${
            isDropdownOpen ? '' : 'hidden'
          }`} >
        <li className="py-0 px-2 hover:bg-blue-100 cursor-pointer" onClick={() => {
              setCurrentType('Category');
              setDropdownOpen(false); // Close the dropdown
            }}>Catogary</li>
        <li className="py-0 px-3 hover:bg-blue-100 cursor-pointer" onClick={() => {
           setCurrentType('Cloze');
           setDropdownOpen(false);
        }}>Cloze</li>
        <li className="py-0 px-3 hover:bg-blue-100 cursor-pointer" onClick={() => {
           setCurrentType('Comprehension');
           setDropdownOpen(false)
        }}>Comprihension</li>
      </ul>

      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mx-4" onClick={() => deleteField(id)}>
        Delete
      </button>
    </div>
    <div>
     {renderQuestionType()}
    </div>
  </div>
    
  </>
  )
}

export default QuestionTemplate