import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Logout from './components/Logout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='*' element={<h1>Home Page</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App