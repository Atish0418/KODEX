import { createContext, useState } from "react";


export let Blog = createContext()

export let BlogProvider = ({ children }) => {

    const [registeredUser, setRegisteredUser] = useState(
        JSON.parse(localStorage.getItem("reg users")) || []
    )
    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("log users")) || null
    )

    const [dropDown, setDropDown] = useState(false)

    const [articles, setArticles] = useState(
        JSON.parse(localStorage.getItem("articles")) || []
    )

    return (
        <Blog.Provider
            value={{
                setRegisteredUser,
                setLoggedInUser,
                registeredUser,
                loggedInUser,
                dropDown,
                setDropDown,
                articles,
                setArticles
            }}
        >
            {children}
        </Blog.Provider>
    )
}