import React, { useContext } from 'react'
import { CartStore } from '../context/cartContext'
import ProductCard from '../components/ProductCard'

const Cart = () => {

  let { cartItems } = useContext(CartStore)

  return (
    <div>
      <h1>Cart</h1>
      <div className='grid grid-cols-5 gap-4 text-black'>
        {
          cartItems.map((elem) => {
            let productInCart = cartItems.find(val => val.id === elem.id)
            return (
              <ProductCard
                key={elem.id}
                product={elem}
                quantity={productInCart?.quantity}
              />)
          })
        }
      </div>
    </div>
  )
}

export default Cart