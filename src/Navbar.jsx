import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id="navbar">
        <h2>Authentication</h2>
        <div>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar