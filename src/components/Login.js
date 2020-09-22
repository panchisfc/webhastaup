import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import {
  useFirebaseApp
} from 'reactfire'

export default () => {
    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }

    return (
        <div className="sesion">
            <div>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email"> Correo Electrónico </label>
                <input type="email" id="email" onChange={ (ev) => setEmail(ev.target.value)} />
                <label htmlFor="password"> Password </label>
                <input type="password" id="password" onChange={ (ev) => setPassword(ev.target.value)}/>
                <button onClick={login}> Iniciar Sesión </button>
            </div>
            <div>
                <Link to="/signup">
                    <button> Registrarse </button>
                </Link>
            </div>
        </div>
    )
};