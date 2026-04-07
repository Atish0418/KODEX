import { createContext, useState } from "react";

export let Auth = createContext()


export let AuthProvider = ({ children }) => {

    const [registeredUsers, setRegisteredUsers] = useState(
        JSON.parse(localStorage.getItem("reg users")) || []
    )
    const [loggedInUsers, setLoggedInUsers] = useState(
        JSON.parse(localStorage.getItem("log user")) || null
    )

    return (
        <Auth.Provider
            value={{
                registeredUsers,
                loggedInUsers,
                setRegisteredUsers,
                setLoggedInUsers
            }}
        >
            {children}
        </Auth.Provider>)
}