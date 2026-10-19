import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

  return (
    <div className='loginGeneral'>
            <button onClick={()=>navigate('/dashboard')}>ACCEDER</button>
            <p onClick={()=>navigate('/register')} >No tienes cuenta Registrate aqui</p>
            <p onClick={()=>navigate('/')} >Regresar</p>
    </div>
  )
}
