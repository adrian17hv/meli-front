import { Link } from "react-router-dom";

import shippingLogo from "../../imagenes/ic_shipping.png";
import "../../css/styles.css";

export const ProductCard = ({ producto }) => {
  return (
    <div className="product-card" key={producto.id}>
      <Link to={`/items/${producto.id}`}>
        <img
          src={producto.picture}
          className="producto-logo"
          alt="thumbnail-producto"
        />
      </Link>
      <div className="contenedor-info">
        <p className="precio">
          {producto.price.currency}${" "}
          {producto.price.amount.toLocaleString("es-AR")}
        </p>
        {producto.free_shipping ? (
          <img
            src={shippingLogo}
            className="shipping-logo"
            alt="shipping-logo"
          />
        ) : null}
        <h3 className="producto-titulo">{producto.title}</h3>
      </div>
    </div>
  );
};
