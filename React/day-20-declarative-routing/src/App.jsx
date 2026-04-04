import React from 'react'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='h-screen px-20' >
      <NavBar />  
      <AppRoutes />
    </div>
  )
}

export default App