import React from 'react'
import '../styles/Button.css'
import { Link } from 'react-router-dom'

export const Button = () => {
    return (
        <Link to="signup">
            <i className="far fa-user"></i>
        </Link>
    )
}
