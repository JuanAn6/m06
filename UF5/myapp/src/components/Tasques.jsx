import { useState } from 'react'

const Tasques = () => 
{
    const [valor, setValor] = useState('');
    const [llista, setLlista]= useState([]);

    const desarTasca = ()=>{
        if(valor.trim() != ''){
            llista.push(valor);
        }
        setValor('');
    }

    //esborar amb el index de la llista
    const esborrarLlista = (index)=>{
        setLlista(llista.filter((ele, i)=>{ return i != index}));
    }

    //esborrar directament amb el element, eliminara elements duplicats
    const esborrarLlista2 = (e)=>{
        setLlista(llista.filter((ele)=>{ return ele != e}));
    }

	return (
	<>
		<h4>Gestió de Tasques</h4>
		<div>
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
            <button onClick={desarTasca}>Desar</button>
		</div>
        <div>
            <ul>
                {llista.map((ele, index)=>
                    <li key={index} className="liCustom">
                        <div>{ele}</div>
                        <div><button onClick={() => esborrarLlista(index)}>Esborrar</button></div>
                    </li>
                )}
            </ul>
        </div>
	</>
	)
}

export default Tasques;