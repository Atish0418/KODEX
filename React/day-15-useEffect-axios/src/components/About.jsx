import React, { useEffect } from 'react'

const About = () => {

    console.log('About rerendering....');

    useEffect(() => {
        let timer = setInterval(() => {
            console.log('hello')
        }, 1000)


        return() => {
            console.log('I am out');
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About