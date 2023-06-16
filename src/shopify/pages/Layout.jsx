// Layout.jsx
import React from 'react'
import Products from '../components/Products'

const Layout = () => {
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  return (
    <div>
      <Products onAddToCart={handleAddToCart} />
    </div>
  )
}

export default Layout
