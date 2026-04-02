import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const About = () => {

  console.log('about rerendering..')

  let {setCount, count} = useContext(MyStore)

  return (
    <div>
        <h1>About </h1>
    </div>
  )
}

export default About