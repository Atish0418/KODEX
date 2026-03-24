import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  const [toggle, setToggle] = useState(false)
  let [count, setCount] = useState(0)
  console.log('app rerendering....')

  // useEffect(() => {
  //   console.log('Hey I am Atish');
  // }, [])



  // API Call

  return (
    <div>
      <h1>App</h1>

      {toggle ? <Home/> : <About/>}

      {/* <Home/>
      <About/> */}

      <button onClick={() => {
        setToggle(prev => !prev)
      }} 
      >
        Change
      </button>

      <button onClick={() => {
        setCount(count + 1);
      }}
      >
        Increment
      </button>
    </div>
    
  )
}

export default App