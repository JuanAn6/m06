import { useState, useContext } from 'react'
import { UsuariContext } from '../context/UsuariContext'


export const HomeScreen = () =>{
    const { usuari } = useContext(UsuariContext);

    return(
    <>
        <h2>Home Screen</h2>
        <div>
            Nom: {usuari.nom} <br/>
            Email: {usuari.email} <br/>
            Passwd: {usuari.passwd} <br/>
        </div>
    </>
    )
}
