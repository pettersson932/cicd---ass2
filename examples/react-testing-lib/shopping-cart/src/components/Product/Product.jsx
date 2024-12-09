import "./Product.css";

function Product({ product, addToCart }) {
  function handleClick() {
    addToCart(product);
  }

  return (
    <article className="product">
      <img src={product.images[0]} alt="" />
      <h2>{product.title}</h2>
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <button onClick={handleClick}>Add to cart</button>
    </article>
  );
}

export default Product;
