import React, { useState, useEffect } from 'react';

function FormList() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await fetch('http://localhost:5000/forms');
        if (response.ok) {
          const formsData = await response.json();
          setForms(formsData);
        } else {
          console.error('Error fetching forms:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    }

    fetchForms();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">List of Forms</h2>
      <ul className="border rounded-lg overflow-hidden shadow-md">
        {forms.map((form) => (
          <li key={form._id} className="border-b last:border-b-0">
            <a
              href={`/form/${form._id}`}
              className="block p-4 hover:bg-gray-100 transition duration-300"
            >
              {form.formName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
