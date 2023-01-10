'use client';

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthWapper({children}) {

    const [globalState, setGlobalState] = useState({
        tokens: null,
        login,
    })

    async function login(userInfo) {
        // end a request to the server 
        const url = "https://cookie-stands-v1.herokuapp.com/api/token/"; // the server url
        const res = await axios.post(url, userInfo);
        // console.log(res.data)
        setGlobalState({
            tokens : res.data,
            login,
        })
    }
    
    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}