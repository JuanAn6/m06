import { CarroContext } from "./CarroContext"
import { useReducer } from 'react'

const initialState = []

export const CarroProvider = ({children})=>
{

    const compresRedurcer = (state = initialState, action = {}) =>{
        switch(action.type){                
            case '[CARRO] afegri compra':
                return[...state, action.payload]
            break;  

            case '[CARRO] Esborrar compra':
                return state.filter((e)=>{ return e.id != action.payload })
            break;   

            case '[CARRO] Aumentar quantitat compra':
                return state.map(item => {
                    if(item.id == action.payload){
                        const qt = item.quantitat +1;
                        return {...item, quantitat:qt}
                    }else{
                        return item
                    }
                })

            break;   

            case '[CARRO] Disminuir quantitat compra':
                return state.map(item => {
                    if(item.id == action.payload && item.quantitat > 1){
                        const qt = Number(item.quantitat) -1;
                        return {...item, quantitat:qt}
                    }else{
                        return item
                    }
                })
            break;

            default:

            break;
        }
    }

    //el userReducre permetra el use i gestio de diferents metodes, en cocret per afegir i treure un producte del carro: afegirCompra elminarCompra
    // i per modificar la quantitat de cada producte: aumentarQuantitat, disminuirQuantitat
    const [llistaCompres, dispatch] = useReducer(compresRedurcer, initialState)
    

    const afegirCompra = (compra)=>{
        compra.quantitat = 1;
        const action = {
            type: '[CARRO] afegri compra', 
            payload: compra
        }
        dispatch(action)
    }

    const eliminarCompra = (id)=>{
        const action = {
            type: '[CARRO] Esborrar compra', 
            payload: id
        }
        dispatch(action)
    }

    const aumentarQuantitat = (id)=>{
        const action = {
            type: '[CARRO] Aumentar quantitat compra', 
            payload: id
        }
        dispatch(action)
    }

    const disminuirQuantitat = (id)=>{
        const action = {
            type: '[CARRO] Disminuir quantitat compra', 
            payload: id
        }
        dispatch(action)
    }

    return(
        <CarroContext.Provider value={{llistaCompres, afegirCompra, eliminarCompra, aumentarQuantitat, disminuirQuantitat}}>
            {children}
        </CarroContext.Provider>
    )
}