import Cart from "../Cart/Cart";

function Header({ cart, amount, removeFromCart }) {
  return (
    <header>
      <Cart amount={amount} cart={cart} removeFromCart={removeFromCart} />
    </header>
  );
}

export default Header;
