import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/header/header.js";
import Formulario from "./components/formulario/formulario.js";
import MiOrganizacion from "./components/mi-organizacion/miOrganizacion.js";
import Equipo from "./components/equipo/equipo.js";
import Footer from "./components/footer/footer";

function App() {
    // Hook
    // useStare ---> Agrega un estado al componente que también se puede cambiar
    const [mostrarFormulario, actualizar] = useState(true);
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuid(),
            equipo: "Front-End",
            foto: "https://github.com/Gsanchezdiaz.png",
            nombre: "Gerson Sanchez",
            puesto: "Estudiante de Alura Latam",
            like: false,
        },
        {
            id: uuid(),
            equipo: "Front-End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harald Lohora",
            puesto: "Instructor en Alura Latam",
            like: false,
        },
        {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
            like: false,
        },
        {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e instructor",
            like: false,
        },
        {
            id: uuid(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            like: false,
        },
        {
            id: uuid(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            like: false,
        },
    ]);
    const [equipos, setEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programación",
            colorDestaque: "#57C278",
            colorFondo: "#D9F7E9",
        },
        {
            id: uuid(),
            titulo: "Front-End",
            colorDestaque: "#82CFFA",
            colorFondo: "#E8F8FF",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorDestaque: "#A6D157",
            colorFondo: "#F0F8E2",
        },
        {
            id: uuid(),
            titulo: "Devops",
            colorDestaque: "#E06B69",
            colorFondo: "#FDE7E8",
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorDestaque: "#DB6EBF",
            colorFondo: "#FAE9F5",
        },
        {
            id: uuid(),
            titulo: "Movil",
            colorDestaque: "#FFBA05",
            colorFondo: "#FFF5D9",
        },
        {
            id: uuid(),
            titulo: "Innovación y Gestión",
            colorDestaque: "#FF8A29",
            colorFondo: "#FFEEDF",
        },
    ]);

    const cambiarEstado = () => {
        actualizar(!mostrarFormulario);
    };
    // -- Registrar Colaborador --
    const registrarColaborador = (colaborador) => {
        console.log("Nuevo Colaborador", colaborador);
        setColaboradores([...colaboradores, colaborador]);
    };
    // -- Crear equipo nuevo --
    const crearEquipo = (nuevoEquipo) => {
        console.log("Nuevo equipo", nuevoEquipo);
        setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
    };
    // -- Eliminar Colaborador --
    const eliminarColaborador = (id) => {
        console.log("Eliminar Colaborador");
        const nuevosColaboradores = colaboradores.filter(
            (colaborador) => colaborador.id !== id
        );
        setColaboradores(nuevosColaboradores);
    };
    // -- Actualizar color de los equipos --
    const actualizarColor = (color, id) => {
        console.log("Actualizar color", color, id);
        const nuevoColor = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorDestaque = color;
            }
            return equipo;
        });
        setEquipos(nuevoColor);
    };
    // -- Definir favorito --
    const favorito = (id) => {
        const nuevosColaboradores = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.like = !colaborador.like;
            }
            return colaborador;
        });
        setColaboradores(nuevosColaboradores);
    };

    return (
        <div>
            <Header />
            {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
            {mostrarFormulario && (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            )}
            <MiOrganizacion cambiarEstado={cambiarEstado} />
            {equipos.map((equipo) => {
                return (
                    <Equipo
                        datos={equipo}
                        key={equipo.titulo}
                        colaboradores={colaboradores.filter(
                            (colaborador) =>
                                colaborador.equipo === equipo.titulo
                        )}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        favorito={favorito}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
