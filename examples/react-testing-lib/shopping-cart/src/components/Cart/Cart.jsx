import "./Cart.css";
import { useState } from "react";

function Cart({ cart, removeFromCart }) {
  const [showCart, setShowCart] = useState(false);

  const cartItems = cart.map((item, index) => {
    return (
      <li key={index} onClick={() => removeFromCart(item.id)}>
        {item.title}
      </li>
    );
  });

  function calculateSum() {
    return cart.reduce((sum, product) => {
      return product.price + sum;
    }, 0);
  }

  return (
    <article className="cart">
      <a
        href="#"
        className="cart__link"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        Cart
      </a>{" "}
      {showCart ? (
        <section className="cart__items">
          <h3>Tillagda produkter</h3>
          <ul>{cartItems}</ul>
          <h3>Summa: {calculateSum()} kr</h3>
        </section>
      ) : (
        ""
      )}
      <p>{cart.length}</p>{" "}
    </article>
  );
}

export default Cart;
