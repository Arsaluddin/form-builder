import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await fetch('http://localhost:5000/forms');
      const data = await response.json();
      setForms(data); // Ensure that the fetched data is properly set to the forms state
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center shadow">
      <div className="flex items-center">
        <a href="#" className="text-white font-bold mr-4">
          Home
        </a>
        <a href="#" className="text-white">
          About
        </a>
      </div>

      <div className="flex items-center">
        <Link to="/forms">
          <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
            Add Form
          </button>
        </Link>
        <input
          type="text"
          className="border rounded-md py-2 px-3 ml-4 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Search forms..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex items-center">
        <a href="#" className="text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

