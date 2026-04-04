import { createContext, useState } from "react";

export let Theme = createContext();

export let ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [renderPages, setRenderPages] = useState('home');

    console.log('render page -> ', renderPages);

    return <Theme.Provider value={{theme, setTheme, renderPages, setRenderPages}}>{children}</Theme.Provider>
};