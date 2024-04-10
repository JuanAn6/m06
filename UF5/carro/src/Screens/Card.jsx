import '../styles/card.css'
export const Card = ({imatge, titol, descripcio, preu}) =>
{

    return(
        <div className="tarjeta">
            <img src={imatge} alt={titol} className="tarjeta-imagen"></img>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titol}</h3>
                <p className="tarjeta-descripcion">{descripcio}</p>
                <p className="tarjeta-precio">{preu}</p>
            </div>
        </div>
    ) 
}