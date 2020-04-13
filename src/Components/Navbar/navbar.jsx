import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyle ={ color : "#fff"}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <NavLink className="navbar-brand" to="/">Coursify</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeStyle={activeStyle} exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses" activeStyle={activeStyle}>Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeStyle={activeStyle}>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout" activeStyle={activeStyle}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
