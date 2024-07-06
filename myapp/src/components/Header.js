import React from 'react'
import '../style.css'
import {BrowserRouter as Router,
  Routes,Link,Route
} from 'react-router-dom'
export default function Header() {
    return(
            <div class="header">
                <h3>MyApp</h3>
                <ul> 
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
    )
}