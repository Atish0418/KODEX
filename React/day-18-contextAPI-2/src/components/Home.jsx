import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Home = () => {
    console.log('home rerendering..')

    let { count, setCount } = useContext(MyStore)


    return (
        <div>
            <h1>Home - {count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className='border rounded px-2 cursor-pointer'
            >
                Increment
            </button>
        </div>
    )
}

export default Home