
function OrderForm() {
    const products = [
      { name: "AMD Ryzen 5 5600", price: 110 },
      { name: "AMD Ryzen 7 7600", price: 215 },
      { name: "AMD Ryzen 9 9600", price: 320 },
    ];
    
    return (
      <div>
        <h3>Select product</h3>
        <label>
          <span>Product: </span>
          <select>
            <option>Select product</option>
              <option></option>
              <option></option>
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

export default OrderForm;
