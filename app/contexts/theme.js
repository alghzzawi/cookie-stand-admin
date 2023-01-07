'use client';

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeWrapper({children}){

    const [isDarkTheme,setIsDarkTheme] = useState(true)
    
    function initialTemeHandle() {
        //take the initial value
        // add dark class to the body element
        isDarkTheme && document.querySelector("body").classList.add("dark")
    }

    function toggleThemeHandler() {
        // check the previose flag value
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark")
    }

    const globalState = {
        isDarkTheme:true,
        toggleThemeHandler
    }

    useEffect(()=>initialTemeHandle())

    return(
        <ThemeContext.Provider value={globalState}>  {/* value is global state */}
            {children}
        </ThemeContext.Provider>
    )
}