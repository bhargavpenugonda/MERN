// src/components/Profile.js
import React, { useState } from 'react';

const Profile = ({ user, setUser }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => 
      u.email === user.email ? { ...u, password: newPassword } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser({ ...user, password: newPassword });
    alert('Password changed successfully!');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default Profile;
