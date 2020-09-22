import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../images/logoweb.png'
import '../styles/Navbar.css'

const Navbar = () => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={logoImg} alt="Hasta Up"></img>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu' } >
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                            ¿Que es una Subasta?
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/servicios" className="nav-links" onClick={closeMobileMenu}>
                            Servicios
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/proximas" className="nav-links" onClick={closeMobileMenu}>
                            Próximas Subastas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sesion" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
                <Link to="/sesion" className="btn">
                    <i className="fas fa-user"> <br/>Acreditarse</i>
                </Link>
            </nav>
        </>
    )
}
export default Navbar