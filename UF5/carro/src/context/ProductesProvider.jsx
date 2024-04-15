import { ProductesContext } from "./ProductesContext"
import { useState, useContext, useEffect } from 'react'

export const ProductesProvider = ({children})=>
{

    const [isLoad, setIsLoad] = useState(false);

	const [productes, setProductes] = useState([]);

	const fetchProductes = async () =>{
		const response = await fetch('https://fakestoreapi.com/products')
		const data = await response.json()
		setProductes(data);
		setIsLoad(true)
	}

	useEffect( ()=>{
		fetchProductes()
	}, [])


    return(
        <ProductesContext.Provider value={{productes, isLoad}}>
            {children}
        </ProductesContext.Provider>
    )
}