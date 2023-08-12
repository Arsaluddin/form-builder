import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FormDetails() {
  const { formId } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function fetchFormDetails() {
      try {
        const response = await fetch(`http://localhost:5000/forms/${formId}`);
        if (response.ok) {
          const formData = await response.json();
          setFormData(formData);
          console.log(formData)
        } else {
          console.error('Error fetching form details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching form details:', error);
      }
    }

    fetchFormDetails();
  }, [formId]);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{formData.formName}</h2>
      {formData.questions.map((question, index) => (
          <div key={index} className="mb-4">
          {question.type === 'Category' && <Category />}
          {question.type === 'Cloze' && <Cloze questionData={question.clozeQuestion} />}
          {question.type === 'Comprehension' && <Comprehension questionData={question.comprehensionQuestion} />}
        </div>
      ))}
    </div>
  );
}

export default FormDetails;
