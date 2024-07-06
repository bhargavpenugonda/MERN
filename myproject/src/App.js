// src/App.js
import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import TaskManager from './TaskManager';

// src/App.js


// src/App.js


const App = () => {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('login'); // default view is login

  const renderComponent = () => {
    switch (currentView) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login setUser={setUser} />;
      case 'profile':
        return <Profile user={user} setUser={setUser} />;
      case 'tasks':
        return <TaskManager user={user} />;
      default:
        return <Login setUser={setUser} />;
    }
  };

  return (
    <div>
      <h1>Personal Task Manager</h1>
      <nav>
        {!user ? (
          <>
            <button onClick={() => setCurrentView('login')}>Login</button>
            <button onClick={() => setCurrentView('register')}>Register</button>
          </>
        ) : (
          <>
            <button onClick={() => setCurrentView('profile')}>Profile</button>
            <button onClick={() => setCurrentView('tasks')}>Task Manager</button>
            <button onClick={() => { setUser(null); setCurrentView('login'); }}>Logout</button>
          </>
        )}
      </nav>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default App;
