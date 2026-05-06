import React from 'react'

const Button = ({ text }) => {
    return (

        <button type="submit" className="cursor-pointer w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition">
            {text}
        </button>
    )
}

export default Button