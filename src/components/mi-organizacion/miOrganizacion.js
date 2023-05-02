import "./miOrganizacion.css"
import {useState} from "react"

const MiOrganizacion = (props) => { 

    return <section className="Org-Section">
        <h3>Mi Organización</h3>
        <img src="./img/add.png" alt="boton agregar" onClick={props.cambiarEstado}/>
    </section>
}

export default MiOrganizacion
