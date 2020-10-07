import React,{ createContext , useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode,setDarkMode] = useState(true);
    function changeMode(){
        setDarkMode(!isDarkMode);
    }
    return (
        <ThemeContext.Provider value={{isDarkMode:isDarkMode,changeMode:changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
