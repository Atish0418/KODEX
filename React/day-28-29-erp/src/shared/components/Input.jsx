import React from 'react'

const Input = ({ label, register, name, rules, error, ...props }) => {

    return (
        <div className="mb-4">
            <label className="text-xs text-gray-500 uppercase">
                {label}
            </label>
            <input
                {...register(name, rules)}
                {...props}
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
            />
            {error && <p className='text-red-600 text-[14px]'>{error.message}</p>}
        </div>
    )
}

export default Input