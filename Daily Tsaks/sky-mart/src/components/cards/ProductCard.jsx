import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className='bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition  focus:border-[#C8F400]'>

            {/* IMAGE */}
            <div className='bg-gray-300 p-6 relative'>
                <span className='absolute top-3 left-3 bg-gray-700 text-white text-[10px] px-2 py-1 rounded-full'>
                    {product.category}
                </span>

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='h-[150px] mx-auto object-contain'
                />
            </div>

            {/* CONTENT */}
            <div className='p-4 flex flex-col gap-2'>

                <p className='text-white/40 text-xs'>{product.category}</p>

                <h2 className='text-sm font-semibold line-clamp-2'>
                    {product.title}
                </h2>

                {/* RATING */}
                <div className='flex items-center gap-1 text-yellow-400 text-sm'>
                    {"★".repeat(Math.round(product.rating))}
                    <span className='text-white/40 text-xs ml-1'>
                        ({product.stock})
                    </span>
                </div>

                {/* PRICE + BUTTON */}
                <div className='flex items-center justify-between mt-3'>

                    <p className='text-[#C8F400] font-bold text-lg'>
                        ${product.price}
                    </p>

                    <button className='bg-[#C8F400] text-black text-sm px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-[#E0FF66] transition'>
                        <i className="ri-shopping-cart-line"></i>
                        Add
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ProductCard