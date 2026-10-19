import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <>
      <header className='header'>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
      </header>
    </>

  )
}
