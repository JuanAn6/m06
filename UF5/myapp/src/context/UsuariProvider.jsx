import React from "react";
import { useState } from "react";
import { UsuariContext } from "./UsuariContext";


export const UsuariProvider = ({children})=>{

    const [usuari, setUsuari] = useState({
        nom: 'Juan',
        email: 'juan@gmail.com',
        passwd: '********',
    })

    return (
        <>
            <UsuariContext.Provider value={{usuari, setUsuari}}>
                {children}
            </UsuariContext.Provider>
        </>
    )
}