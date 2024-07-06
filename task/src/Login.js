import React, { useState } from 'react';
import { useUser } from './MyContext'; // Adjust the import path according to your file structure

const Login = () => {
  const { users } = useUser();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === loginData.username && user.password === loginData.password);
    if (user) {
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
