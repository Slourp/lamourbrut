// Layout.jsx
import React from 'react'
import Products from '../components/Products'
import Footer from '../../layout/Footer'

const Layout = () => {
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  return (
    <>
      <div>
        <Products onAddToCart={handleAddToCart} />
      </div>
      <Footer />
    </>
  )
}

export default Layout
