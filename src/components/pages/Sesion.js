import React from 'react'
import Login from '../Login'
import { useUser } from 'reactfire'
import 'firebase/auth'

import {
    useFirebaseApp
} from 'reactfire';


const Sesion = () => {

    const firebase = useFirebaseApp();
    const user = useUser()

    const logout = async () =>{
        await firebase.auth().signOut()
    }

    return (
        <div>
            {
                !user && <Login />
            }
            {
                user && 
                <div>
                    <h2>{user.email}</h2>
                    <button onClick={logout}>Cerrar Sesión</button>
                </div>
            }
        </div>
    )
}
export default Sesion