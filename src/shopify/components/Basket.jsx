import React, { useState, useEffect } from 'react'
import { FaShoppingBasket, FaTrash } from 'react-icons/fa'

const CartItem = ({ itemId, name, imgSrc, price, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(itemId)
  }

  return (
    <li className="flex items-center mb-2">
      <img className="w-8 h-8 mr-2" src={imgSrc} alt={name} />
      <span className="mr-auto">{name}</span>
      <div className="flex items-center">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={handleRemoveItem}
        >
          <FaTrash />
        </button>
      </div>
      <span className="ml-4">{price}</span>
    </li>
  )
}

const Basket = ({ cartItems, onRemoveItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [cartItems])

  const toggleBasket = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-[40px] right-0 m-4 mt-10">
      <div className="relative">
        <button
          className="p-2 bg-gray-200 rounded-full relative"
          onClick={toggleBasket}
        >
          <FaShoppingBasket size={20} />
        </button>
        {isOpen && (
          <div className="absolute top-8 right-0 w-[400px] h-screen bg-white shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-bold">Panier</h3>
              <ul className="max-w-[60px]">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    itemId={item.id}
                    name={item.title}
                    imgSrc={item.variant.image.src}
                    price={item.variant.price.amount}
                    onRemoveItem={onRemoveItem} // Utilisez onRemoveItem au lieu de removeCartItem
                  />
                ))}
              </ul>
              <button
                className="mt-4 p-2 bg-gray-200 rounded"
                onClick={toggleBasket}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Basket
