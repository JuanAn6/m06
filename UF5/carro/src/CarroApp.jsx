import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'

function CarroApp() {

  return (
    <>
      <div className="container-fluid mt-2">
        <h2>CarroApp</h2>
        <hr/>
        <NavBar>
            
        </NavBar>
      </div>
    </>
  )
}

export default CarroApp
