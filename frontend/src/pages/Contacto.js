import React from "react";
import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
    return (
        <main className="holder contacto">

            <div className="Info">
                <div className="column">

                    <h2>Contacto Rapido</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <div className="acciones">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
            <div class="columnDatos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguintes medios</p>
                <ul>
                    <li>Teléfono:1133230946</li>
                    <li>Email:PGiadans@outlook.com</li>
                </ul>
            </div>

        </main>
    );
}

export default Contacto;