import React from 'react'

const ProductList = ({ product, handleProductDelete, setCartItems, setGetClickedProduct }) => {
  return (
    <div>
      <h1>{product.title}</h1>

      <div className='mb-2'>
        <button
          className='cursor-pointer'
          onClick={() => handleProductDelete(product.id)}
        >
          Delete
        </button>

        <button
          onClick={() => setCartItems(prev => {
            return [...prev, product]
          })}
          className='ml-4 cursor-pointer'
        >
          Add to Cart
        </button>

        <button
          onClick={() => setGetClickedProduct(product)}
          className='ml-4 cursor-pointer'
        >
          Send to user
        </button>
      </div>
    </div>
  )
}

export default ProductList