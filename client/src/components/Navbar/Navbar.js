import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../components/Navbar/Navbar.scss"
export default function Navbar() {
  return (
    <div className="nav">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
    </ul>
  </div>
)
}
