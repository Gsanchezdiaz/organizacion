import "./colaborador.css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto, id, like } = props.colaborador;
    const { colorCabecera, eliminarColaborador, favorito } = props;

    return (
        <div className="colaborador">
            <IoIosClose
                className="eliminar"
                onClick={() => eliminarColaborador(id)}
            />
            <div className="encabezado" style={colorCabecera}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {like == true ? (
                    <AiFillHeart color="red" onClick={() => favorito(id)} />
                ) : (
                    <AiOutlineHeart onClick={() => favorito(id)} />
                )}
            </div>
        </div>
    );
};

export default Colaborador;
