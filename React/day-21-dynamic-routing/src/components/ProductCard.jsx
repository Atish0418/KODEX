import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { CartStore } from '../context/cartContext'

const ProductCard = ({ product, quantity }) => {

    let { handleAddToCart, cartItems, handleQtyInc, handleQtyDec } = useContext(CartStore)
    let navigate = useNavigate()



    let isInCart = cartItems.find((elem) => elem.id === product.id)

    return (
        <div className=' flex flex-col gap-5 border rounded-xl p-5 mb-4'>

            <div
                onClick={() => navigate(`/product/${product.id}`)}
                className='cursor-pointer'>
                <img
                    className='rounded-xl'
                    width={300}
                    src={product?.images[0]} alt="" />
            </div>

            <div>
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>Price: ${product.price}</p>
            </div>

            <div className='flex justify-between w-full items-center text-white'>

                {
                    isInCart ? (<div className='flex gap-4 items-center '>
                        <p
                            onClick={() => handleQtyDec(product.id)}
                            className='cursor-pointer px-2 bg-green-600 text-white'
                        >
                            -
                        </p>

                        <p
                            className='text-black'
                        >
                            {quantity}
                        </p>

                        <p
                            onClick={() => handleQtyInc(product.id)}
                            className='cursor-pointer px-2 bg-red-600 text-white'
                        >
                            +
                        </p>
                    </div>
                    ) : (
                        <button
                            onClick={() => handleAddToCart(product)}
                            className='cursor-pointer px-3 py-1 rounded bg-green-500'
                        >
                            Add to cart
                        </button>)
                }
                <button className='cursor-pointer px-3 py-1 rounded bg-red-500'>Remove</button>
            </div>
        </div>
    )
}

export default ProductCard