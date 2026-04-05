import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

  let navigate = useNavigate()

  let data = [
    {
      name:"Atish"
    },
    {
      name:"Ashish"
    },
    {
      name:"Kiran"
    }
  ]

  return (
    <div className='flex gap-10 text-xl cursor-pointer'>
        {
          data.map((elem, index) => (
            <h1 key={index} onClick={() => navigate(`/names/${elem.name}`)}>{elem.name}</h1>
          ))
        }
    </div>
  )
}

export default Home