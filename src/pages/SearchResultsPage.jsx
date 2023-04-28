import { useLocation } from "react-router-dom";
import useProductos from "./components/useProductos";
import { ProductCard } from "./components/ProductCard";

import "../css/styles.css";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");
  const { data: productos, isLoading } = useProductos(search);

  const categorias = productos?.categories;

  const listaCategoria = categorias?.map((categoria) => categoria).join(" > ");

  return (
    <div className="page-wrapper">
      <p className="categorias">{listaCategoria}</p>
      {search && (
        <>
          {isLoading ? (
            <>Cargando resultados de la busqueda...</>
          ) : (
            productos?.items?.map((producto) => (
              <ProductCard producto={producto} key={producto.id} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
