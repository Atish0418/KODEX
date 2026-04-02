import { Children, createContext, useState } from "react";

export let Theme = createContext();

export let ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')
    return <Theme.Provider value={{theme, setTheme}}>{children}</Theme.Provider>
}