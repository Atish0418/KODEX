import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext'

const About = () => {

  let {theme} = useContext(Theme);
  return (
    <div>
        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}`}>This is About</h1>
    </div>
  )
}

export default About