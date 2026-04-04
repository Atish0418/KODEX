import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { Theme } from '../context/ThemeContext'

const Home = () => {

  let {theme} = useContext(Theme);
  return (
    <div>
        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}` }>This is Home</h1>
    </div>
  )
}

export default Home