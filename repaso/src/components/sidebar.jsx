import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export const Sidebar = () => {


    const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li><Link className='textLink' to="/dashboard/home">Inicio</Link></li>
          <li><Link className='textLink' to="/dashboard/clients">Clientes</Link></li>
          <li><Link className='textLink' to="/dashboard/users">Usuarios</Link></li>
        </ul>
        <button onClick={navigate("/login")}>Salir</button>
      </nav>
    </>
  )
}
