import React from "react";

const Nav = (props) => {
    return (
        <nav class="holder">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/Novedades">Novedades</a></li>
                <li><a href="/Productos">Productos</a></li>
                <li><a href="/Contacto">Contactanos</a></li>
            </ul>
        </nav>

    );
}

export default Nav;