
import { useState } from 'react'
import PropTypes from 'prop-types'

const Formulari = () => 
{
  const [formState, setFormState] = useState({
    username : '',
    email : '',
    password : ''
  });

  const changeValues = (evt) =>{
    let nom = evt.target.name;
    let value = evt.target.value;

    setFormState({
      ...formState,
      [nom]: value
    })
  }

  const sendForm = (evt) =>{
    evt.preventDefault();
    console.log(formState);
  }


	return (
	<>	
    <h4>Formulari</h4>
    <form onSubmit={sendForm}>
      <div>
        <label htmlFor='username' className='form-label'>Username</label>
        <input type='username' className='form-control input-custom' name='username' 
          onChange={changeValues}
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' className='form-control input-custom' name='email' 
          onChange={changeValues}
        />
      </div>
      <div>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password' className='form-control input-custom' name='password' 
          onChange={changeValues}
        />
      </div>
      <input type='submit' className=' btn-light  btn mt-2'/>
    </form>
  </>
	)
}

export default Formulari;