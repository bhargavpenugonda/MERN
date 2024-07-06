import React, { useState } from 'react';
import { useUser } from './MyContext'; // Adjust the import path according to your file structure

const Register = () => {
  const { addUser } = useUser();
  const [formData, setFormData] = useState({ name: '', age: '', username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ name: '', age: '', username: '', password: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
