import { useContext, useState } from 'react'
import { UsuariContext } from '../context/UsuariContext';
import { useForm } from '../hooks/useForm';


export const LoginScreen = () =>{

    const initialForm = {
        nom : '',
        email: '',
        password: '',
        data_naix: ''
    }

    const {formState, onInputChange } = useForm(initialForm);

    const {nom, email, password, data_naix } = formState;

    const { setUsuari } = useContext(UsuariContext);

    const f_onSubmit = (evt)=>{
        evt.preventDefault();
        console.log(formState);
        setUsuari(formState);
    }

    return(
    <>
        <h2>Login Screen</h2>

        <form onSubmit={f_onSubmit}>
            <div className="form-group">
                <label htmlFor="nom">Nom: </label>
                <input type="text" className='form-control' name="nom" 
                    value={nom}
                    onChange={onInputChange}
                />
                
                <label htmlFor="email">Email: </label>
                <input type="email" className='form-control' name="email" 
                    value={email}
                    onChange={onInputChange}
                />
                
                <label htmlFor="password">Password: </label>
                <input type="password" className='form-control' name="password" 
                    value={password}
                    onChange={onInputChange}
                />

                <label htmlFor="data_naix">Data_naix: </label>
                <input type="date" className='form-control' name="data_naix" 
                    value={data_naix}
                    onChange={onInputChange}
                />

                <div className='form-group'> 
                    <input className="btn btn-primary" type="submit" value="Registrar" />
                </div>
            </div>
        </form>
    </>
    )
}
