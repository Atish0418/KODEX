import React from 'react'

const ProductCard = ({product}) => {


    return (
        <div className='w-full  border-2 p-3 flex flex-col items-center text-center rounded-lg'>

            <div className='w-full h-[250px]'>
                <img className='w-full h-full object-cover rounded-lg' 
                src={product.image} alt="" />
            </div>

            <div className='leading-snug'>
                <h2 className='font-[650] text-[18px] mt-1 '>{product.name}</h2>
                <div className='text-[14px]'>
                    <p className='leading-[1.1]'>{product.description}</p>
                    <p>Price: ₹ {product.price}</p>
                </div>
            </div>

            <button 
            className='bg-black w-full font-[650]
             text-white py-1 text-[14px] rounded-md mt-2
             border-2 border-transparent
             transition-all duration-150 ease-out
             cursor-pointer

             hover:bg-white
             hover:border-black
             hover:text-black
             hover:shadow-[2px_2px_0_black]

             active:shadow-[0_2px_0_black]
             active:translate-y-px
             '
             >
                Add to Cart
            </button> 
        </div>
    );
};

export default ProductCard;