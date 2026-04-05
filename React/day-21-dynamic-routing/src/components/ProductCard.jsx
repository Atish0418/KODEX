import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { CartStore } from '../context/cartContext'

const ProductCard = ({product}) => {

    let {setCartItems, cartItems}=  useContext(CartStore)
    let navigate = useNavigate()

    let handleAddToCart = () => {
        setCartItems(prev => [...prev, product])
    }

    let isInCart = cartItems.find((elem) => elem.id === product.id)

    return (
        <div className=' flex flex-col gap-5 border rounded-xl p-5 mb-4'>
            <div onClick={() => navigate(`/product/${product.id}`)} className='cursor-pointer'>
                <img 
                className='rounded-xl'
                width={300}
                src={product.products[0].thumbnail} alt="" />
            </div>
            <div>
                <h1>{product.products[0].title}</h1>
                <p>Price: ${product.products[0].price}</p>
            </div>
            <div className='flex justify-between w-full items-center text-white'>
                {
                    isInCart ? (<div className='flex gap-4 items-center '>
                        <p className='px-2 bg-green-600 text-white'>-</p>
                        <p className='text-black'>1</p>
                        <p className='px-2 bg-red-600 text-white'>+</p>
                    </div>) : (<button onClick={() => handleAddToCart()} className='cursor-pointer px-3 py-1 rounded bg-green-500'>Add to cart</button>)
                }
                <button className='cursor-pointer px-3 py-1 rounded bg-red-500'>Remove</button>
            </div>
        </div>
    )
}

export default ProductCard