import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <nav className="NavBar d-flex justify-content-between bg-light">
            <Link className="btn btn-secondary btn-lg m-2" to="/">Librerias Lea</Link>
        <div className="menu navBar--height">
          
            <Link className="btn btn-secondary btn-lg m-2" to='/productos/ROMANCE'>Romance</Link>
            <Link className="btn btn-secondary btn-lg m-2" to='/productos/FICCION'>Ficcion</Link>
            <Link className="btn btn-secondary btn-lg m-2" to='/productos/TERROR'>Terror</Link>
            <Link className="btn btn-secondary btn-lg m-2" to='/productos/FANTASIA'>Fantasia</Link>
            
        </div>
        <Link className='link' to='/cart'><CartWidget/></Link>
        </nav>
    )
}
