import React from "react";
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav class="holder">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Novedades">Novedades</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Contacto">Contactanos</Link></li>
            </ul>
        </nav>

    );
}

export default Nav;