import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext';

const Contact = () => {

  let {theme} = useContext(Theme);
  return (
    <div>
        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}` }>This is Contact</h1>
    </div>
  )
}

export default Contact