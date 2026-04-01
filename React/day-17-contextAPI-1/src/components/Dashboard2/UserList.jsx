import React, { use } from 'react'

const UserList = ({ user, handleUserDelete }) => {

  return (
    <div>
      <h1>{user.firstName} {user.maidenName} {user.lastName}</h1>
      <button
        onClick={() => handleUserDelete(user.id)}
        className='cursor-pointer'
      >
        Delete
      </button>
    </div>
  )
}

export default UserList