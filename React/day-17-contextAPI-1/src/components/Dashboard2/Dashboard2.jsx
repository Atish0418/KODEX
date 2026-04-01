import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import UserList from './UserList'

const Dashboard2 = ({getClickedProduct}) => {

  console.log(getClickedProduct)

  const [allUsers, setAllUsers] = useState([])

  let fetchAllUsers = async () => {
    let res = await axios.get("https://dummyjson.com/users")
    console.log(res.data.users)
    setAllUsers(res.data.users)
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  let handleUserDelete = (user_id) => {
    let userFilter = allUsers.filter((elem) => elem.id !== user_id )
    console.log(userFilter)
    setAllUsers(userFilter)
  }

  return (
    <div>
      <h1>Users Home</h1>
      <div>
        {
          allUsers.map((elem) => {
            return (
              <
                UserList 
                handleUserDelete = {handleUserDelete}
                user={elem}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Dashboard2