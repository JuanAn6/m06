import { useState, useContext } from 'react'
import { UsuariContext } from '../context/UsuariContext'

export const ContactScreen = () =>{
    const { usuari } = useContext(UsuariContext);

    return(
    <>
        <h2>Contact Screen</h2>
        <div>
            Nom: {usuari.nom} <br/>
            Email: {usuari.email} <br/>
            Passwd: {usuari.password} <br/>
        </div>
    </>
    )
}
