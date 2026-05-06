import React, { useState } from 'react'

const App = () => {

  console.log('rerendering....')

  let [obj, setObj] = useState({
    name : "Atish",
    age : 25,
    occupation : "developer"
  });

  let [arr, setArr] = useState(["Atish", "Ashish", "Kiran"]);

  return (
    <div>
      <h1>Name is :{obj.name} </h1>
      <h1>Age is :{obj.age} </h1>

      <h1>Arr is :{arr+ " "} </h1>
      <button onClick={() => {
        setObj({...obj, name:"Ashish", age:26});

        arr[2] = "Yelena";
        setArr([...arr])
      }}>
        Change
      </button>
    </div>
  )
}

export default App