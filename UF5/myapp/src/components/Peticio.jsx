
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Peticio = () => 
{
    const [datos, setDatos] = useState([]);

    const fetchGetDatos = async () =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            let dades = await response.json();
            setDatos(dades);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchGetDatos();
    }, [])
    
    

	return (
	<>	
        <h4>Lista Petició</h4>
        <ol>
          {datos.map((ele)=>
            <li key={ele.id} class="custom-align-end">
                {ele.username} -
                {ele.email}
            </li>
          )}
        </ol>
    </>
	)
}

export default Peticio;