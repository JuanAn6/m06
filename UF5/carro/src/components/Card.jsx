import '../styles/card.css'
import { useState } from 'react'

export const Card = ({imatge, titol, descripcio, preu, handleAfegir, handleEliminar, isAdded = false}) =>
{
    const [added, setAdded] = useState(isAdded)


    const f_afegirCarro = ()=>{
        handleAfegir()
        setAdded(true)

    }

    const f_treureCarro = ()=>{
        handleEliminar()
        setAdded(false)
    }

    return(
        <div className="tarjeta">
            <img src={imatge} alt={titol} className="tarjeta-imagen"></img>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titol}</h3>
                <p className="tarjeta-descripcion">{descripcio}</p>
                <p className="tarjeta-precio">{preu}</p>
                {
                    added?
                        <button className="boton-quitar" onClick={f_treureCarro}>Treure del carro</button>
                    :
                        <button className="boton-agregar" onClick={f_afegirCarro}>Afegir al carro</button>
                }
            </div>
           
        </div>
    ) 
}