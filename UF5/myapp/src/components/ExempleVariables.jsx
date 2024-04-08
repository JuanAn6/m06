import { useState } from 'react'

const ExempleVariables = () => 
{
	const [contador, setContador] = useState(0);

	const array = ['hola', 'que', 'tal', 'como', 'estamos'];

	return (
	<>
		<h4>Variables</h4>
		<div>
			<div>Array</div>
			<ul>
				{
					array.map((ele, i)=>
						<li key={i}>{ele}</li>
					)
				}
			</ul>
		</div>
	</>
	)
}

export default ExempleVariables;