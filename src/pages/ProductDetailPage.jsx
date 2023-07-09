import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useProducto from "./components/useProducto";

import "../css/styles.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProducto(id);
  const producto = data?.item;
  const categorias = producto?.category;

  const listaCategorias = categorias?.map((categoria) => categoria).join(" > ");

  return (
    <>
      <div className="page-wrapper page-wrapper--margin-bottom">
        {id && (
          <>
            {isLoading ? (
              <>Cargando detalle del producto seleccionado... </>
            ) : (
              <>
                <p className="categorias">{listaCategorias}</p>
                <ProductDetail producto={producto} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;

//me importo el hook personalizado y de ahi utulizo data y isLoading
//data y isLoading son las variables que contienen el valor del estado
//en el hook isLoading esta seteado a true y data a null
//el hook customizado useProducto recibe como parametro un ID
