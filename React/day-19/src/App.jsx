import React, { useContext, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Theme } from './context/ThemeContext'

const App = () => {

  let {theme} = useContext(Theme)
  return (
    <div className={`h-screen ${theme ===  "dark" ? "bg-gray-700" : "bg-white" } flex flex-col gap-6`}>
      <NavBar  />
      <div className='h-[90%] px-25'>
        <Home />
      </div>
    </div>
  )
}

export default App