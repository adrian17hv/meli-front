const ProductDetail = ({ producto }) => {
  return (
    <div className="contenedor-principal">
      <img
        src={producto.picture}
        className="foto-producto"
        alt="foto-producto"
      />
      <div className="detalle-producto">
        <h4 className="condicion">
          {producto.condition === "new" ? "Nuevo" : "Usado"} -{" "}
          {producto.sold_quantity} vendidos
        </h4>
        <h3 className="titulo-producto">{producto.title}</h3>
        <h3 className="precio">
          {producto.price.currency}${" "}
          {producto.price.amount.toLocaleString('es-AR')}
          <sup className="decimal">{producto.price.decimals}</sup>
        </h3>
        <button className="boton-comprar">Comprar</button>
      </div>
      <div className="contenedor-parrafo">
        <h2 className="titulo-descripcion-parrafo">{producto.title}</h2>
        <p className="descripcion-parrafo">{producto.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
