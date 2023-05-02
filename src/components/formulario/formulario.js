import { useState } from "react";
import "./form.css";
import Campo from "../campo/campo.js";
import ListaOpciones from "../lista-opciones/lista-opciones.js";
import Boton from "../boton/boton.js";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarEvento = (event) => {
        event.preventDefault();
        console.log("Datos Colaborador", event);
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };
        props.registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        console.log(titulo, color);
        props.crearEquipo({ titulo, colorDestaque: color });
        alert("Nuevo equipo creado");
    };
    return (
        <section className="formulario">
            <form onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crea el colaborador.</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    setValor={setFoto}
                />
                <ListaOpciones
                    titulo="Equipo"
                    valor={equipo}
                    setEquipo={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crea el equipo.</h2>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar nombre del equipo"
                    required
                    valor={titulo}
                    setValor={setTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color para el equipo en hexadecimal"
                    required
                    valor={color}
                    setValor={setColor}
                    type="color"
                />
                <Boton>Nuevo Equipo</Boton>
            </form>
        </section>
    );
};

export default Formulario;
