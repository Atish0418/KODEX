import React, { useContext, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Theme } from './context/ThemeContext'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router'
import ProductCard from './components/ProductCard'

const App = () => {

  let { theme, renderPages } = useContext(Theme)
  return (
    <div className={`h-screen ${theme === "dark" ? "bg-gray-700" : "bg-white"} flex flex-col gap-6`}>
      <NavBar />
      <div className='px-25'>
        <Routes>
          <Route path='/' element={<ProductCard />}></Route>
          <Route path='/home' element = {<Home />} ></Route>
          <Route path='/about' element = {<About />} ></Route>
          <Route path='/contact' element = {<Contact />} ></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App