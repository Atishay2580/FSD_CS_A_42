import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Stopwatch from "./components/Stopwatch"
import Reducerex from "./components/Reducerex"
import Login from "./components/Login"

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/signup" element={<h1>Signup Page</h1>} />
      <Route path="/stopwatch" element={<Stopwatch/>} />
      <Route path="/use-reducer" element={<Reducerex/>} />
      <Route path="/signin" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
