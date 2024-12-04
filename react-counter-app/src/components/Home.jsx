import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <li><Link to="/counter">Counter app</Link></li>
            <li><Link to="/stopwatch">Counter app</Link></li>
        </ul>
    </div>
  )
}

export default Home