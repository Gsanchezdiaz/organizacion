import "./lista-opciones.css";

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        console.log(e.target.value);
        props.setEquipo(e.target.value);
    };

    return (
        <div className="lista-opciones">
            <label>{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar equipo
                </option>
                {props.equipos.map((equipo, index) => {
                    return <option key={index}>{equipo}</option>;
                })}
                ;
            </select>
        </div>
    );
};

export default ListaOpciones;
