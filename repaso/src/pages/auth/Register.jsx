import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()

    const [nombreCompleto, setNombreCompleto] = useState("")
    const [usuario, setusuario] = useState("")
    const [password, setpassword] = useState("")

    const registro = (e) =>{
        e.preventDefault()
        console.log({nombreCompleto, usuario, password})

        const dataStorage = JSON.parse(localStorage.getItem('usuarios')) || []
        console.log(dataStorage)
        dataStorage.push({nombreCompleto, usuario, password})
        console.log(dataStorage)
        localStorage.setItem('usuarios', JSON.stringify(dataStorage))
        alert("Registro exitoso")
        navigate('/login')
    }

    return (
        <div>
            <form onSubmit={registro} >
                <label htmlFor="">Nombre completo</label>
                <input onChange={(e) => setNombreCompleto(e.target.value)} type="text" />
                <br />

                <label htmlFor="">Usuario</label>
                <input onChange={(e) => setusuario(e.target.value)} type="text" />
                <br />

                <label htmlFor="">Contraseña</label>
                <input onChange={(e) => setpassword(e.target.value)} type="text" />
                <br />
                <input type="submit" value="REGISTRARSE" />
            </form>
        </div>
    )
}
