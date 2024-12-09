import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const productComponents = products.map((product) => {
    return <Product product={product} key={product.id} addToCart={addToCart} />;
  });

  function filterProducts(event) {
    if (event.target.value === "") getProducts();

    const result = products.filter((product) => {
      if (product.title.includes(event.target.value)) return product;
    });

    setProducts(result);
  }

  function addToCart(product) {
    setCart((prevState) => {
      return [...prevState, product];
    });

    setAmount(amount + 1);
  }

  function removeFromCart(id) {
    const tempCart = [...cart];
    const newCart = tempCart.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    });

    setCart(newCart);
  }

  return (
    <main>
      <Header amount={amount} cart={cart} removeFromCart={removeFromCart} />
      <label>Sök: </label>
      <input type="text" onKeyUp={filterProducts} />
      <section className="products">{productComponents}</section>
    </main>
  );
}

export default App;
