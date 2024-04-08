import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import {HomeScreen} from './screens/HomeScreen'
import {AboutScreen} from './screens/AboutScreen'
import {ContactScreen} from './screens/ContactScreen'
import {LoginScreen} from './screens/LoginScreen'
import { UsuariProvider } from './context/UsuariProvider'

function App() {

  return (
    <UsuariProvider>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<HomeScreen />}
          ></Route>
          <Route
            path='/about'
            element={<AboutScreen />}
          ></Route>
          <Route
            path='/contact'
            element={<ContactScreen />}
          ></Route>
          <Route
            path='/login'
            element={<LoginScreen />}
          ></Route>
          <Route
            path='/*'
            element={<HomeScreen />}
          ></Route>
        </Routes>
      </div>
    </UsuariProvider>
  )
}

export default App
