import { useState } from 'react'

const Contador = () => 
{
	const [contador, setContador] = useState(0);

	return (
	<>
		<h1>Hello world!</h1>
		<button onClick={()=> setContador(contador+1)}>+</button>
		<button onClick={()=> setContador(contador-1)}>-</button>
		<button onClick={()=> setContador(0)}>Reset</button>
		<div><p>Clicks: {contador}</p></div>
	</>
	)
}

export default Contador;