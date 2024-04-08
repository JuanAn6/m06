
import { useState, useEffect } from 'react'

const useFetch = (url) => 
{
    const [estat, setEstat] = useState({
        data: [],
        isLoading: true,
        error: null
    });

    const fetchGetDatos = async () =>{
        if(url == null) return

        try{
            const response = await fetch(url);
            let dades = await response.json();
            setEstat({
                data: dades,
                isLoading: false,
                error: null
            })
        }catch(e){
            console.error(e);
            setEstat({
                data: null,
                isLoading: false,
                error: e
            })
        }
    }

    useEffect(()=>{
        fetchGetDatos();
    }, [])


    return estat;
}

export default useFetch;