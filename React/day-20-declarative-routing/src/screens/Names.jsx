import React from 'react'
import { useParams } from 'react-router'

const Names = () => {

    let {name} = useParams()
    // console.log(data)

  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Names