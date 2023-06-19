import React, { useState } from 'react'
import Basket from '../components/Basket'
import CheckOut from '../components/CheckOut'

const Validation = () => {
  const [cartItems, setCartItems] = useState([])
  const [showCheckOut, setShowCheckOut] = useState(false)

  const handleAddItem = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.quantity * item.variants[0].price.amount,
      0
    )
  }

  const handleBuy = () => {
    setShowCheckOut(true)
  }

  return (
    <div>
      <h1>Mon application de vente en ligne</h1>
      <Basket
        cartItems={cartItems}
        onAddItem={handleAddItem}
        calculateTotalPrice={calculateTotalPrice}
        openCheckOut={() => setShowCheckOut(true)}
      />
      {showCheckOut && (
        <CheckOut
          cartItems={cartItems} // Modifié cette ligne pour passer cartItems
          totalPrice={calculateTotalPrice()}
          onBuy={handleBuy}
        />
      )}
    </div>
  )
}

export default Validation
