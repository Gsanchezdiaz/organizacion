import "./campo.css";

const Campo = (props) => {
    const { type = "text" } = props;

    //El formulario es el que se encargar de cambiar el estado
    //El formulario envía los valores de hook por medio de props
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
        console.log("cambios", props.setValor(e.target.value));
    };

    const placeholderModificado = `${props.placeholder}...`;
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    );
};

export default Campo;
