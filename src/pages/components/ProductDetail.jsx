const ProductDetail = ({ producto }) => {
  return (
    <div>
      <img src={producto.picture} alt="foto-producto" />
      <h2>{producto.title}</h2>
      <p className="parrafo-descripcion">{producto.description}</p>
      <h4>
        {producto.condition} - {producto.sold_quantity}
      </h4>
      <h1>{producto.title}</h1>
      <h3 className="precio">
        {producto.price.currency}
        {producto.price.amount}
        <sup>{producto.price.decimals}</sup>
      </h3>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
};

export default ProductDetail;
