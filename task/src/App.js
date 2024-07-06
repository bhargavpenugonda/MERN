import React from 'react';
import { UserProvider } from './MyContext'; // Adjust the import path according to your file structure
import Register from './Register'; // Adjust the import path according to your file structure
import Login from './Login'; // Adjust the import path according to your file structure

const App = () => (
  <UserProvider>
    <Register />
    <Login />
  </UserProvider>
);

export default App;
