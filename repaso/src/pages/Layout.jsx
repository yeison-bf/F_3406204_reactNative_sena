import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/sidebar'

export const Layout = () => {
  return (
    <div className='contenidoGeneral'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='contenidoHijos'>
        contenido
        <Outlet/>
      </div>
    </div>
  )
}
