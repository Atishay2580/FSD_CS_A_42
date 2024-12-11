import React from 'react'
import Header from './Header'
import { Link, Outlet } from "react-router-dom"
import "../App.css" 

const Home = () => {
  return (
    <div>
        <Header />
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Home