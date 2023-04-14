import { Link } from "react-router-dom";

import shippingLogo from "../../imagenes/ic_shipping.png";
import "../../css/styles.css";

export const ProductCard = ({ producto }) => {
  return (
    <div className="product-card" key={producto.id}>
      <Link to={`/items/${producto.id}`}>
        <img src={producto.picture} className="product-logo" />
        <div>
          <div>
            <h2>{producto.title}</h2>
            <img
              src={shippingLogo}
              className="shipping-logo"
              alt="shipping-logo"
            />
            <p className="precio">$ {producto.price.amount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
