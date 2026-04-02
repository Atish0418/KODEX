import React, { useContext } from 'react'
import { MyStore } from './context/MyContext'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  console.log('app rerendering..')

  let data = useContext(MyStore)

  return (
    <div>
      <h1>App</h1>
      <Home />
      <About />
    </div>
  )
}

export default App