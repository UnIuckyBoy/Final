import React from "react";
import Index from '../../styles/components/pages/Index.css'

const Home = (props) => {
    return (
        <div className="columnas">
            <h1>
                Bienvenidos a Anteiku
            </h1>
            <h2>
                -¿Quienes somos?
            </h2>
            <h3>
                Nosotros somos Anteiku, una marca de ropa dedicada a al diseño y fabricacion de Drops compuestos de varias prendas en base a una tematica especifica
            </h3>
            <h2>
                -¿Cada cuanto sale un nuevo drop y cuanto dura en venta?
            </h2>
            <h3>
                Los drops se renuevan de forma mensual, los mismos estaran disponibles solo durante el periodo de reserva, pasado ese periodo no se podra adquirir el mismo, de todas formas pasado este periodo se puede encargar de igual manera cualquier prenda de un drop pasado, solo que este pedido pasara a lista de espera hasta que ingrese la materia prima correspondiente para la elaboracion de dicho pedido
            </h3>
            <h2>
                -¿Se pueden adquirir las prendas por separado o unicamente el drop completo?
            </h2>
            <h3>
                Si se puede adquirir la o las prendas por separado, no es necesario el adquirir el drop completo, de igual manera el adquirir un drop en su totalidad lleva un descuento especial
            </h3>
            <h2>
                -¿Como hago para adquirir un drop?
            </h2>
            <h3>
                Los drops pueden ser reservados por cualquier medio de la pestaña de "Contactanos", por cualquiera de esos medios tambien se le enviara las formas de pago y los tiempos de espera
            </h3>
        </div>
    );
}

export default Home;