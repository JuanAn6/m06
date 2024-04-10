import { useState } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { CompresScreen } from './Screens/CompresScreen'
import { CarroScreen } from './Screens/CarroScreen'
import { ProductesScreen } from './Screens/ProductesScreen'

function CarroApp() 
{

  return (
    <>
      <div className="container-fluid mt-2">
        <NavBar></NavBar>
        <div className='mt-3'></div>
        <Routes>
          <Route path="/" element={<CompresScreen></CompresScreen>} />
          <Route path="/carro" element={<CarroScreen></CarroScreen>} />
          <Route path="/productes" element={<ProductesScreen></ProductesScreen>} />
          <Route path="/*" element={<Navigate to="/"></Navigate>} />
        </Routes>
      </div>
      
    </>
  )
}

export default CarroApp
