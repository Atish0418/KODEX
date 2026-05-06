import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import axios from 'axios'

const App = () => {

  const [toggle, setToggle] = useState(false)
  let [count, setCount] = useState(0)
  const [name, setName] = useState([])
  // console.log('app rerendering....')


  // useEffect(() => {
  //   console.log('Hey I am Atish');
  // }, [])



  // API Call

  let fetchData = async() => {
    let res = await axios.get("https://fakestoreapi.com/users");
    setName(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <h1>App</h1>

      {/* {toggle ? <Home/> : <About/>} */}

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

      <div>
        {
          name.map((elem) =>{
            <h1>{elem.name.firstname}</h1>
          })
        }
      </div>
    </div>
    
  )
}

export default App;