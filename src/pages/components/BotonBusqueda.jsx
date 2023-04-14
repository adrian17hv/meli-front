import searchIcon from "../../imagenes/ic_Search.png";
import { useNavigate } from "react-router-dom";

import "../../css/styles.css";

const BotonBusqueda = ({ value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`items?search=${value}`);
  };

  return (
    <button onClick={handleClick} className="boton-busqueda">
      <img src={searchIcon} alt="icono-busqueda" />
    </button>
  );
};

export default BotonBusqueda;

//el value lo traigo de la url y lo utilizo como un param en la link de react router
//con react router hago la funcion para redireccionar a la url con el value del search
//el onClick llama a la funcion handleClick, que a su vez ejecuta ...
//
