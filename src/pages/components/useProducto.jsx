import { useEffect, useState } from "react";
import axios from "axios";

function useProducto(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    setData([]);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/items/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [id]);

  return { data, isLoading };
}

export default useProducto;

//el useEffect hace un request cuando el ID cambia
//primero setea el estado de loading a true y limpia cualquier data seteando un array vacio
//luego hace una peticion HTTP GET al server local con un parametro dinamico del ID value que esta en el URL
//si el request es exitoso el response.data se guarda en el estado del componente usando la funcion setData()
//si hay un error se imprime en la pantalla error
//finalmente mas alla de que el request sea exitoso o no el estado de loading se setea a falso usando la funcion setIsLoading()
//asi el componente puede renderizar la data una vez que esta disponible, y muestra un indicador de loading esperando por la respuesta
