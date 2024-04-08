import { useState } from 'react'
import PropTypes from 'prop-types'
import LlistaNouItem from './LlistaNouItem.jsx'


const Item = ({nom, fet}) =>{
    return (
    <>
        <li>{nom} - {fet ? '^_^': 'O_O'}</li>
    </>
    )
}

const Llista = () => 
{
    const [llista, setLlista] = useState([]);

    const onAddItem = (val) =>{
        console.log(val)
        setLlista([...llista, val]);
        console.log(llista);
    }
	return (
	<>
		<h4>Gestio Llista</h4>	
        <div>
          <ol>
            {llista.map((ele, index) =>
                <Item key={index} nom={ele} fet={index % 2 == 0? true : false} />
            )}
          </ol>
        </div>
        <div>
            <LlistaNouItem f_add={onAddItem}/>
        </div>
    </>
	)
}



export default Llista;