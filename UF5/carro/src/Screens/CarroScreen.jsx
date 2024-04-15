import { useState, useContext } from 'react'
import { CarroContext } from '../context/CarroContext'
import { CountCarro } from '../components/CountCarro'
import { ProductesContext } from '../context/ProductesContext'
import { Icon } from '@iconify/react'

export const CarroScreen = () =>
{

    const { productes, isLoad } = useContext(ProductesContext)

    const {
        llistaCompres,
        afegirCompra,
        eliminarCompra,
        aumentarQuantitat,
        disminuirQuantitat
    } = useContext(CarroContext)

    const calcularTotal = () => {
        
        return llistaCompres.reduce((total, item)=>
            total + item.price*item.quantitat, 0
        ).toFixed(2)
    }

    const handleTicket = () =>{
        print()
    }

    const handleEliminarCompra = (prod)=>{
        productes.map((e)=>{
			if(e.id == prod.id){
				e.added = false
			}
			return e
		})
        eliminarCompra(prod.id)
    }

    return(
    <>
        <h2>Carro Screen</h2>
        
            {
                llistaCompres.length <= 0 ?
                <div className="w-100 d-flex flex-column align-items-center custom-no-products p-5" >
                    <h2 className="text-center">Has de afegir coses al carro!</h2>
                    <Icon className="text-center icon-carro-custom" icon="carbon:shopping-cart-arrow-down" />
                </div>
                :
                    <div>
                        <table className="w-100">
                            <thead>
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Preu</th>
                                    <th scope="col">Quantitat</th>
                                    <th scope="col">Esborrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                </tr>
                                {
                                    llistaCompres.map((prod, i)=>
                                        <tr key={prod.id}>
                                            <td>{prod.title}</td>
                                            <td>{prod.price}</td>
                                            <td>
                                                <CountCarro 
                                                    handleAumentar={aumentarQuantitat} 
                                                    handleDecrementar={disminuirQuantitat} 
                                                    item={prod}
                                                />
                                            </td>
                                            <td>
                                                <button className="btn btn-danger " onClick={ () => {handleEliminarCompra(prod)} }>Esborrar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>TOTAL: {calcularTotal()} €</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary " onClick={handleTicket} disabled={ llistaCompres.length > 0? false : true } >Comprar</button>
                        </div>
                    </div>
            }
    </>
    )
}