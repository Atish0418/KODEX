import React from 'react'
import {useParams} from 'react-router'

const About = () => {

    let {id} = useParams()
  return (
    <div>
        <h2>About - {id}</h2>
    </div>
  )
}

export default About