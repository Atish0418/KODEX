import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext';

const NavBar = () => {

  let { theme, setTheme } = useContext(Theme);

  return (
    <div className={`h-[10%] shadow-2xl ${theme === 'dark' ? "text-white bg-black" : "text-black bg-white"} flex justify-between px-25 items-center`}>
      <h1 className='text-2xl font-bold'>Logo</h1>
      <div className='flex items-center gap-10 text-[18px] font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
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