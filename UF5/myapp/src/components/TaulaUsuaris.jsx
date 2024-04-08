
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch.js'

const TaulaUsuaris = () => 
{
    const estat = useFetch('https://jsonplaceholder.typicode.com/users');
    const {data, isLoading, error} = estat;
    
	return (
	<>	
        <h4>Hook fetch</h4>
        {
            isLoading?
                <h4>Carregant Informacio...</h4>
            : error != null?
                <div>
                    <h4>Error</h4>
                    <p>{error}</p>
                </div>
            :
            <ol>
                {data.map((ele)=>
                    <li key={ele.id} className="custom-align-end">
                        {ele.username} -
                        {ele.email}
                    </li>
                )}
            </ol>
                
        }   
    </>
	)
}

export default TaulaUsuaris;