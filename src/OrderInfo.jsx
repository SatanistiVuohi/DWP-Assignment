function Order({ selectedProduct, quantity }) {
  return (
    <div>
      <h3>Order info</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.name}</td>
            <td>{quantity}</td>
            <td>{selectedProduct.price * quantity + " €"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Order;