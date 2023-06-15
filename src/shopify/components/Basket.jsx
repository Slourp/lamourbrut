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

const Basket = ({
  cartItems,
  onRemoveItem,
  isOpen,
  toggleBasket,
}) => {
  return (
    <div className="fixed  right-0 m-4 mt-10">
      <div className="">
        {isOpen && (
          <div className="absolute top-8 right-0 w-[400px] h-screen shadow-lg bg-white">
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
                    onRemoveItem={onRemoveItem}
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
