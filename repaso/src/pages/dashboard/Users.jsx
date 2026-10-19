import React, { useEffect, useState } from 'react'

export const Users = () => {

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('usuarios')) || []
        setListUser(data)
    }, [])

  
    return (
        <div>
            <h2>Listado de Usuarios</h2>
            <br />
            {listUser.map((elment) => (
                <>
                    <p>Nombre : {elment.nombreCompleto}  </p>
                    <p>Usuario : {elment.usuario} </p>
                    <hr />
                </>
            ))}
        </div>
    )
}
