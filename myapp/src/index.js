import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login';
import {BrowserRouter as Router,
 Routes,
 Link,
 Route} from 'react-router-dom'
import Register from './components/Register';
import Example from './Example';
import './input.css';
//import TodoList from './components/TodoList';
const root =document.getElementById('root')
const VirtualRoot = ReactDOM.createRoot(root);
//virtual Root( V DOM)
VirtualRoot.render(
 <Router>
 <div>
 <Header/>
<Example/>

 </div>
 <Routes>
 <Route path="/login" element={<Login/>} />
 <Route path="/register" element={<Register/>} />
 </Routes>
 </Router>
)