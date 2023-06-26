import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {
  FaSadTear,
  FaTrash,
  FaTimes,
  FaCashRegister,
} from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { TbTruckDelivery } from 'react-icons/tb'
import CheckOut from '../Checkout/CheckOut'

import './Basket.css'

const Basket = ({
  cartItems,
  products,
  onClose,
  onRemoveItem,
  onAddItem,
  onDeleteItem,
}) => {
  const [isBasketOpen, setIsBasketOpen] = useState(true)
  const [isBasketClosing, setIsBasketClosing] = useState(false)
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleRedirect = (path) => {
    window.location.href = path
  }

  const handleRemoveItem = (itemId) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === itemId
    )
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems]
      if (updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity -= 1
      } else {
        updatedItems.splice(itemIndex, 1)
      }
      onRemoveItem(updatedItems)
    }
  }

  const handleAddItem = (itemId) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === itemId
    )
    if (itemIndex !== -1) {
      setSelectedItem(
        products.find((product) => product.id === itemId)
      )
      setIsCheckOutOpen(true)
    }
  }

  const handleDeleteItem = (itemId) => {
    onDeleteItem(itemId)
  }

  const closeBasket = () => {
    setIsBasketClosing(true)
    onClose()
  }

  const openCheckOut = () => {
    window.location.href = '/checkout'
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        item.quantity *
          products.find((product) => product.id === item.id)
            .variants[0].price.amount,
      0
    )
  }

  const getProductQuantity = (itemId) => {
    return cartItems.reduce((total, item) => {
      if (item.id === itemId) {
        return total + 1
      }
      return total
    }, 0)
  }

  if (!isBasketOpen) {
    return null
  }

  return (
    <div
      className={`fixed pt-12 right-0 top-0 bottom-0 w-[400px] h-screen bg-lbpink z-10 ${
        isBasketOpen
          ? 'basket-open'
          : isBasketClosing
          ? 'basket-closing'
          : 'basket-closed'
      }`}
    >
      <div className="p-4 mt-auto">
        <AiOutlineClose
          className="cursor-pointer"
          onClick={closeBasket}
          size={50}
        />
      </div>
      <div className="p-4">
        <h3 className="text-[35px] pt-10 font-bold font-times-new-roman text-center">
          MY CART
        </h3>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div className="">
          {cartItems.map((item, index) => {
            const product = products.find((p) => p.id === item.id)

            return (
              <div
                key={index}
                className="flex items-start mb-4 hover:bg-lbgreen"
              >
                {product.images && product.images.length > 0 && (
                  <img
                    className="w-20 h-20 mr-2 object-cover cursor-pointer"
                    src={product.images[0].src}
                    alt={product.title}
                  />
                )}
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] font-bold">
                      {product.title}{' '}
                      {getProductQuantity(item.id) > 1 && <FaTimes />}{' '}
                      {getProductQuantity(item.id)}
                    </p>
                    <div className="flex items-center">
                      <CgMathPlus
                        className="mr-2 text-black cursor-pointer"
                        onClick={() => handleAddItem(item.id)}
                      />

                      <CgMathMinus
                        className="text-black cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      />

                      <FaTrash
                        className="ml-2 text-red-500 cursor-pointer"
                        size={20}
                        onClick={() => handleDeleteItem(item.id)}
                      />
                    </div>
                  </div>
                  <div className="mt-auto text-[16px]">
                    quantity: {item.quantity}{' '}
                    <div className="mt-10">
                      {product.variants[0].price.amount} €
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="bg-black text-white w-[100%] h-12 mt-[230px] flex items-center gap-5 justify-center">
            <p>TOTAL</p>
            <p>{calculateTotalPrice()} €</p>
            <TbTruckDelivery size={25} />
          </div>
          <div className="mt-8 flex gap-5 items-center justify-center">
            <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex items-center justify-center">
              <FaCashRegister size={25} color="white" />
            </div>
            <button
              className="text-[18px] font-bold"
              onClick={() => openCheckOut()}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 rounded bg-lbpinklight border-lbgreenlight h-[350px] w-[300px] mx-auto flex items-center justify-center flex-col gap-5">
          <p className="font-arial-black text-[30px] text-center">
            YOUR CART IS EMPTY
          </p>
          <FaSadTear className="text-yellow-500" size={60} />
          <div>
            <button
              onClick={() => handleRedirect('/shop')}
              className="border-4 cursor-pointer border-black rounded p-2 bg-lbpink z-10 text-black font-bold"
            >
              START SHOPPING
            </button>
          </div>
        </div>
      )}
      {isCheckOutOpen && (
        <CheckOut
          cartItems={cartItems}
          products={products}
          totalPrice={calculateTotalPrice()}
          onBuy={() => {}}
          selectedItem={selectedItem}
        />
      )}
    </div>
  )
}

export default Basket
