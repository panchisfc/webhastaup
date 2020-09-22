import React, { useState} from 'react'
import 'firebase/auth'
import {
  useFirebaseApp
} from 'reactfire';

export default (props) =>{

    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="sesion">
            <div>
                <h2>Registrarse</h2>
                <label htmlFor="email"> Correo Electrónico </label>
                <input type="email" id="email" onChange={ (ev) => setEmail(ev.target.value)} />
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={ (ev) => setNombre(ev.target.value)} />
                <label htmlFor="password"> Password </label>
                <input type="password" id="password" onChange={ (ev) => setPassword(ev.target.value)}/>
                <button onClick={submit}> Guardar </button>
            </div>  
        </div>
    )
}