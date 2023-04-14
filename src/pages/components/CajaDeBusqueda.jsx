import { useState } from "react";
import { Link } from "react-router-dom";
import BotonBusqueda from "./BotonBusqueda";

import logoMl from "../../imagenes/Logo_ML.png";
import "../../css/styles.css";

function CajaDeBusqueda() {
  const [search, setSearch] = useState("");

  return (
    <nav className="nav">
      <div className="page-wrapper">
        <div>
          <Link to={"/"}>
            <img src={logoMl} className="logo" alt="logo-ml" />
          </Link>
          <div className="contenedor-input">
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <BotonBusqueda value={search} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CajaDeBusqueda;

//usa el hook useProductos y le pasa como paramentro el search para traer data y guardarla en la variable productos, la destructuracion es para renobrar data a productos asi es mas entendible
//la segunda variable isLoading tambien esta destructurada de el return value de useProductos, es como una variable booleana indicando si la data esta cargando o no.
//uso un hook para guardar el estado de la busqueda en la variable search con la funcion setSearch, y en el value le cargo el value del search
//
