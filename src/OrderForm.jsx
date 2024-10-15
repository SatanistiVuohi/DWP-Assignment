import { useState } from "react";


function ProductSelection() {
    const products = [
      { name: "AMD Ryzen 5 5600", price: 110 },
      { name: "AMD Ryzen 7 7600", price: 215 },
      { name: "AMD Ryzen 9 9600", price: 320 },
    ];
    
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const changeProducts = (e) => {
        const selectedName = e.target.value;
        const product = products.find((p) => p.name === selectedName);
        setSelectedProduct(product);
    };

    return (
      <div>
        <h3>Select product</h3>
        <label>
          <span>Product: </span>
          <select value={selectedProduct.name} onChange={changeProducts}>
            <option value="">Select product</option>
            {products.map((p) => (
                <option key={p.name} value={p.name}>
                    {p.name + " (" + p.price + "€)"}
                </option>
            ))}
              
          </select>
        </label>
        <br />
  
        <span>Quantity: </span>
        <button>-</button>
        <span></span>
        <button>+</button>
      </div>
    )
  }

export default ProductSelection;
