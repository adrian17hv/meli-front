import { useLocation } from "react-router-dom";
import useProductos from "./components/useProductos";
import { ProductCard } from "./components/ProductCard";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");
  const { data: productos, isLoading } = useProductos(search);

  return (
    <div className="page-wrapper">
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
