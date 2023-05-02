import hexToRgba from "hex-to-rgba";
import Colaborador from "../colaborador/colaborador.js";
import "./equipo.css";

const Equipo = (props) => {
    // -- Destructuración --
    const { titulo, colorDestaque, colorFondo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, favorito } =
        props;

    // -- Organizando estilos --
    const colorParaFondo = { backgroundColor: colorFondo };
    const colorParaDestaque = {
        backgroundColor: hexToRgba(colorDestaque, 0.4),
    };
    const colorSubrrayadoTitulo = { borderColor: colorDestaque };

    return (
        <>
            {colaboradores.length > 0 && (
                <section className="equipo" style={colorParaDestaque}>
                    <input
                        type="color"
                        className="input-color"
                        value={colorDestaque}
                        onChange={(event) => {
                            actualizarColor(event.target.value, id);
                        }}
                    />
                    <h2 style={colorSubrrayadoTitulo}>{titulo}</h2>
                    <div className="colaboradores">
                        {colaboradores.map((colaborador, index) => (
                            <Colaborador
                                colaborador={colaborador}
                                key={index}
                                colorCabecera={colorParaDestaque}
                                eliminarColaborador={eliminarColaborador}
                                favorito={favorito}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Equipo;
