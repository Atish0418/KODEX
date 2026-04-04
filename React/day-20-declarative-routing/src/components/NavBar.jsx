import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='h-[10%] flex items-center justify-between'>
      <h1>Logo</h1>
      <div className='flex gap-10 font-medium '>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-red-600" : ""}
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "text-red-600" : ""}
        >
          About
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) => isActive ? "text-red-600" : ""}
        >
          Product
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "text-red-600" : ""}
        >
          Contact
        </NavLink>
      </div>
      <button className='cursor-pointer'>Sign up</button>
    </div>
  )
}

export default NavBar