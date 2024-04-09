import React from "react";
import { useState } from "react";
import { UsuariContext } from "./UsuariContext";


export const UsuariProvider = ({children})=>{

    const [usuari, setUsuari] = useState({
        nom: 'Juan',
        email: 'juan@gmail.com',
        password: '********',
        data_naix: '06/01/2004',
    })

    return (
        <>
            <UsuariContext.Provider value={{usuari, setUsuari}}>
                {children}
            </UsuariContext.Provider>
        </>
    )
}