import React, { useContext } from 'react'
import { Theme } from '../context/ThemeContext'

const ProductCard = () => {

    let {theme} = useContext(Theme);

    return (
        <div className= {`w-[30%] border ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} p-6 rounded-xl flex flex-col gap-6`} >
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1733864827270-0c10a3a4960c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            </div>
            <div>
                <h1>Product Name</h1>
                <p>Product Price</p>
            </div>
            <div className='flex justify-between w-full'>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard