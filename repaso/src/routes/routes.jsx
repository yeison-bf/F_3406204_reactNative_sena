import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../pages/Home/Inicio'
import { Login } from '../pages/auth/Login'
import { Register } from '../pages/auth/Register'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/dashboard/home'
import { Users } from '../pages/dashboard/Users'
import Cliente from '../pages/dashboard/Clientes/Cliente'

export const RoutesApp = () => {
  return (  
    <Routes>
      {/* Rutas externas */}
        <Route path='/' element={<Inicio/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />


        <Route path="/dashboard" element={<Layout/>}>
          <Route path='home' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='clients' element={<Cliente />} />
        </Route>
    </Routes>
  )
}
