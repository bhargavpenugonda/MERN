// src/components/TaskManager.js
import React, { useState, useEffect } from 'react';

const TaskManager = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ date: '', time: '', note: '' });

  useEffect(() => {
    if (user && user.email) {
      const userTasks = JSON.parse(localStorage.getItem(user.email)) || [];
      setTasks(userTasks);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTask = () => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem(user.email, JSON.stringify(updatedTasks));
    setTask({ date: '', time: '', note: '' });
  };

  if (!user || !user.email) {
    return null;
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <input type="date" name="date" value={task.date} onChange={handleChange} />
      <input type="time" name="time" value={task.time} onChange={handleChange} />
      <input type="text" name="note" value={task.note} onChange={handleChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.date} {task.time} - {task.note}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
