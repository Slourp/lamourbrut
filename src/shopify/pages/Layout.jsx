// Layout.jsx
import React, { useState } from 'react'
import Products from '../components/Products'
import Basket from '../components/Basket'

const Layout = () => {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    )
  }

  return (
    <div>
      <Basket
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem} // Utilisez onRemoveItem au lieu de removeCartItem
      />
      <Products onAddToCart={handleAddToCart} />
    </div>
  )
}

export default Layout
