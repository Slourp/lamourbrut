// src/components/ProductListPage.js
import React from 'react'

const ProductListPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]

  const {
    cart,
    addToCart,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
    resetCart,
    undoCommand,
  } = useShoppingCart()

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  }

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h1>Cart</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Subtotal</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td style={cellStyle}>{product.id}</td>
              <td style={cellStyle}>{product.name}</td>
              <td style={cellStyle}>{product.price}</td>
              <td style={cellStyle}>
                {product.quantity}
                <button onClick={() => increaseProduct(product.id)}>
                  +
                </button>
                <button onClick={() => decreaseProduct(product.id)}>
                  -
                </button>
              </td>
              <td style={cellStyle}>
                {product.price * product.quantity}
              </td>
              <td style={cellStyle}>
                <button onClick={() => deleteProduct(product.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {total}</p>
      <button onClick={resetCart}>Reset Cart</button>
      <button onClick={undoCommand}>Undo</button>
    </div>
  )
}

export default ProductListPage
