import React,{ createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props){
    const [initialLanguage,setLanguage ] = useState("English");
    const changeLanguage = e => setLanguage(e.target.value);

    return (
        <LanguageContext.Provider value={{ initialLanguage, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}