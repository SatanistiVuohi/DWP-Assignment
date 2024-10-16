import { useState } from "react";
import Order from "./OrderInfo";

function ProductSelection() {
  const products = [
    { name: "AMD Ryzen 5 5600", price: 110 },
    { name: "AMD Ryzen 7 7600", price: 215 },
    { name: "AMD Ryzen 9 9600", price: 320 },
    { name: "AMD Radeon RX 6800 XT", price: 649 },
    { name: "AMD Radeon RX 6700 XT", price: 479 },
    { name: "AMD Radeon RX 6600 XT", price: 379 }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const changeProducts = (e) => {
    const selectedName = e.target.value;
    const product = products.find((p) => p.name === selectedName);
    setSelectedProduct(product);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  }

  return (
    <div>
      <h3>Select product</h3>
      <label>
        <span>Product: </span>
        <select value={selectedProduct.name} onChange={changeProducts}>
          {products.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name + " (" + p.price + "€)"}
            </option>
          ))}

        </select>
      </label>
      <br />
      <span>Quantity: </span>
      <button onClick={decreaseQuantity}>-</button>
      <span> {quantity} </span>
      <button onClick={increaseQuantity}>+</button>

      <Order selectedProduct={selectedProduct} quantity={quantity} />
    </div>
  )
}
export default ProductSelection;
