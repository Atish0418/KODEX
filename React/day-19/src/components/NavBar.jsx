import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext';
import { NavLink } from 'react-router';

const NavBar = () => {

  let { theme, setTheme, renderPages, setRenderPages } = useContext(Theme);

  return (
    <div className={`h-[10%] shadow-2xl ${theme === 'dark' ? "text-white bg-black" : "text-black bg-white"} flex justify-between px-25 items-center`}>
      <NavLink
        to='/'
        className='text-2xl font-bold'
      >
        Logo
      </NavLink>

      <div className='flex items-center gap-10 text-[18px] font-semibold'>
        <NavLink
          // onClick={() => setRenderPages('home')}
          // className={`${renderPages === "home" && "text-red-600"}`}
          className={({isActive}) => isActive ? "text-red-600" : (theme === "dark" ? "text-white" : "text-black")}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          className={({isActive}) => isActive ? "text-red-600" : (theme === "dark" ? "text-white" : "text-black")}
          // onClick={() => setRenderPages('about')}
          // className={`${renderPages === "about" && "text-red-600"}`}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({isActive}) => isActive ? "text-red-600" : (theme === "dark" ? "text-white" : "text-black")}
          // onClick={() => setRenderPages('contact')}
          // className={`${renderPages === "contact" && "text-red-600"}`}
          to="/contact"

        >
          Contact
        </NavLink>

      </div>
      <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
        className={`text-[18px] cursor-pointer px-4 py-1 rounded ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'} border`}
      >
        {
          theme === "light" ? "Dark" : "Light"
        }
      </button>
    </div>
  )
}

export default NavBar