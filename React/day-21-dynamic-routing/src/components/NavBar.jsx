import { isAxiosError } from 'axios'
import React, { useContext } from 'react'
import {NavLink} from 'react-router'
import { CartStore } from '../context/cartContext'

const NavBar = () => {

  let {cartLength} = useContext(CartStore)
  return (
    <div className=' h-[10%] flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='flex gap-10'>
            <NavLink to="/" className={({isActive}) => isActive ? "text-red-600" : ""} >Home</NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive ? "text-red-600" : ""} 
            >
              Cart 
              <span>{cartLength}</span>
            </NavLink>
        </div>
        <button className='cursor-pointer'>LogIn</button>
    </div>
  )
}

export default NavBar