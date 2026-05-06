import { createContext, useState } from "react";

export let Auth = createContext()

export let AuthContextProvider = ({ children }) => {
    const [registeredAdmins, setRegisteredAdmins] = useState([])
    const [loggedInAdmins, setLoggedInAdmins] = useState(null)

    return (
        <Auth.Provider
            value={{
                registeredAdmins,
                setRegisteredAdmins,
                loggedInAdmins,
                setLoggedInAdmins
            }}
        >
            {children}
        </Auth.Provider>
    )
}