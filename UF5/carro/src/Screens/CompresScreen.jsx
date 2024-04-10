import { useState, useContext, useEffect } from 'react'
export const CompresScreen = () =>
{
    const fetchProductes = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
    }

    useEffect( ()=>{
        fetchProductes()
    }, [])

    return(
    <>
        <h2>Compres Screen</h2>
    </>
    )
}