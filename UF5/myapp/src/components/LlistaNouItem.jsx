import { useState } from 'react'
import PropTypes from 'prop-types'


const ListaNouItem = ({f_add}) => 
{
    const [valor, setValor] = useState('');

    const f_desar = (ev) =>{
        setValor(ev.target.value);
    }
    
    const f_onSubmit = (ev) =>{
        ev.preventDefault()
        f_add(valor);
        setValor('');
    }

	return (
	<>	
        <div>
          <form onSubmit={f_onSubmit}>
            Nou element: <br/>
            <input type='text' placeholder='Nom del element' value={valor} onChange={f_desar}></input><br/>
            <input type='submit'></input>
          </form>
        </div>
    </>
	)
}

export default ListaNouItem;
