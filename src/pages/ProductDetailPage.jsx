import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useProducto from "./components/useProducto";

import "../css/styles.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProducto(id);
  const producto = data?.item;

  return (
    <>
      <div className="page-wrapper">
        {id && (
          <>
            {isLoading ? (
              <>Cargando detalle de producto seleccionado...</>
            ) : (
              <ProductDetail producto={producto} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;

//me importo el hook personalizado y de ahi utulizo data e isLoading
//data e isLoading son las variables con contienen el valor del estado
//en el hook isLoading esta seteado a true y data a null
//el hook customizado useProducto recibe como parametro un ID