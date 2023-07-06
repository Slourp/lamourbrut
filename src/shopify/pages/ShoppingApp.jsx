import React, { useState } from 'react'
import ProductDetails from '../components/Products/ProductsDetails'
import Basket from '../components/Basket/Basket'

const ShoppingApp = () => {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    )

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
      setCartItems(updatedItems)
    } else {
      const newItem = { id: item.id, quantity: 1 }
      setCartItems([...cartItems, newItem])
    }
  }

  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== itemId
    )
    setCartItems(updatedItems)
  }

  const handleAddItem = (itemId) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
    setCartItems(updatedItems)
  }

  const handleDeleteItem = (itemId) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== itemId
    )
    setCartItems(updatedItems)
  }

  const handleCloseBasket = () => {
    setCartItems([])
  }

  return (
    <div>
      <ProductDetails
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
      />
      {cartItems.length > 0 && (
        <Basket
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          onClose={handleCloseBasket}
        />
      )}
    </div>
  )
}

export default ShoppingApp
