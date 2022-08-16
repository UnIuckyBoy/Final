import React from "react";
import { Outlet, Link } from "react-router-dom"
import '../../styles/components/layout/Nav.css'

const Nav = () => {
    return (
        <>
            <nav className="holder">
                <ul>
                    <li><Link to="">Inicio</Link></li>
                    <li><Link to="Novedades">Novedades</Link></li>
                    <li><Link to="Productos">Productos</Link></li>
                    <li><Link to="Contacto">Contactanos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>

    );
}

export default Nav;