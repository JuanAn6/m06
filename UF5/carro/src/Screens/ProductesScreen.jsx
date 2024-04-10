import { useState, useContext, useEffect } from 'react'
import { Card } from './Card'
export const ProductesScreen = () =>
{
	const [isLoad, setIsLoad] = useState(false);

	const [productes, setProductes] = useState([]);

	const fetchProductes = async () =>{
		const response = await fetch('https://fakestoreapi.com/products')
		const data = await response.json()
		console.log(data)
		setProductes(data);
		setIsLoad(true)
	}

	useEffect( ()=>{
		fetchProductes()
	}, [])

	return(
	<>
			<h2>Productes Screen</h2>
			{!isLoad ? 
				<p>Loading...</p>
			:
				productes.map((p,i)=>
					<Card 
						key={i}
						imatge={p.image}
						titol={p.title}
						descripcio={p.description}
						preu={p.price}
					></Card>
				)
			}
	</>
	)
}