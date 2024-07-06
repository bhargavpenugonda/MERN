import React, { useState } from 'react';
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      rollNo: '',
      className: '',
      feedback: ''
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData(formData);
      setIsSubmitted(true);
    };
  
    return (
      <div>
        <h1 align="center">Feedback Form</h1>
        <form onSubmit={handleSubmit} align="center">
          <div>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Roll No:
              <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Class:
              <input type="text" name="className" value={formData.className} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Feedback:
              <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
  
        {isSubmitted && (
          <div>
            <h2 align="center">Form Submitted</h2>
            <table  align="center" border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Roll No</th>
                  <th>Class</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{submittedData.name}</td>
                  <td>{submittedData.age}</td>
                  <td>{submittedData.rollNo}</td>
                  <td>{submittedData.className}</td>
                  <td>{submittedData.feedback}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default FeedbackForm;