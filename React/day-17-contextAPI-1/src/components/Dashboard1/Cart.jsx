import React from 'react'

const Cart = ({ setShowCart, cartItems }) => {
  return (
    <div>
      <div className='flex justify-between text-2xl mb-2'>
        <h1 >Cart Screen</h1>
        <button
          className='cursor-pointer'
          onClick={() => setShowCart(false)}
        >Close
        </button>
      </div>

      <div>
        {
          cartItems.map((elem) => {
            return <h1>{elem.title}</h1>
          })
        }
      </div>
    </div>
  )
}

export default Cart