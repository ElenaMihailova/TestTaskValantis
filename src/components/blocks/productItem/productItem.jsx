function ProductItem({product}) {
  return (
    <div>
      <h3> {product.product} </h3>
      <p> {product.id} </p>
      <p> {product.price} </p>
      <p> Brand {product.brand} </p>
    </div>
  );
}

export default ProductItem;
