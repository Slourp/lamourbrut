import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSadTear, FaTrash, FaCashRegister } from 'react-icons/fa'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { TbTruckDelivery } from 'react-icons/tb'
import CheckOut from '../Checkout/CheckOut'

import './Basket.css'
import useProducts from '../Products/Hook/useProduct'
import CartContext from '../../../ShoppingCart/Context/CartContext'
import { useNavigate } from 'react-router-dom'

const Basket = ({
  cartItems,
  onClose,
  onRemoveItem,
  onAddItem,
  onDeleteItem,
}) => {
  const [isBasketOpen] = useState(true)
  const [isBasketClosing, setIsBasketClosing] = useState(false)
  const [isCheckOutOpen] = useState(false)

  const { products } = useProducts()

  const {
    // isOpen,
    // closeShoppingCart,
    // openShoppingCart,
    // resetCart,
    // increaseProduct,
    // undoCommand,
    cart,
    addToCart,
    deleteProduct,
    decreaseProduct,
    calculateTotal,
  } = useContext(CartContext)

  const navigate = useNavigate() // Ajouter cette ligne

  const handleRedirect = (path) => {
    navigate(path)
  }

  const handleRemoveItem = (product) => {
    decreaseProduct(product.id)
  }

  const handleAddItem = (product) => {
    addToCart(product)
  }

  const handleDeleteItem = (product) => {
    deleteProduct(product.id)
  }

  const closeBasket = () => {
    setIsBasketClosing(true)
    onClose()
  }

  const openCheckOut = () => {
    handleRedirect('/checkout')
  }

  const calculateTotalPrice = () => {
    return calculateTotal()
  }

  if (!isBasketOpen) {
    return null
  }

  let basketClassName = 'basket-closed'
  if (isBasketOpen) {
    basketClassName = 'basket-open'
  } else if (isBasketClosing) {
    basketClassName = 'basket-closing'
  }

  return (
    <div
      className={`fixed pt-12 right-0 top-0 bottom-0 w-[400px] h-screen bg-lbpink z-10 ${basketClassName}`}
    >
      <div className="p-4 mt-auto">
        <AiOutlineClose
          className="cursor-pointer"
          onClick={closeBasket}
          size={50}
        />
      </div>
      <div className="p-4" />
      {cart && cart.length > 0 ? (
        <div className="">
          {cart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex items-start mb-4 hover:bg-green-500"
              >
                {product.images && product.images.length > 0 && (
                  <img
                    className="w-20 h-20 mr-2 object-cover cursor-pointer"
                    src={product.images[0].src}
                    alt={product.title}
                  />
                )}
                <div className="flex-grow">
                  <div className="flex justify-around items-center">
                    <p className="text-[12px] font-bold">
                      {product.title}{' '}
                    </p>
                    <div className="flex items-center">
                      <CgMathPlus
                        className=" text-black cursor-pointer"
                        onClick={() => handleAddItem(product)}
                      />

                      <span className="text-black">
                        {product.quantity}
                      </span>

                      <CgMathMinus
                        className="ml-2 text-black cursor-pointer"
                        onClick={() => handleRemoveItem(product)}
                      />

                      <FaTrash
                        className="ml-2 text-black cursor-pointer"
                        size={15}
                        onClick={() => handleDeleteItem(product)}
                      />
                    </div>
                  </div>
                  <div className="text-start ml-4 mt-auto text-[16px]">
                    <div className="mt-10">{product.price} €</div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="bg-black text-white w-[100%] h-12 flex items-center mt-[350px]  gap-5 justify-center">
            <p>TOTAL</p>
            <p>{calculateTotalPrice()} €</p>
            <CgMathPlus />
            <TbTruckDelivery size={25} />
          </div>
          <div className="mt-5 flex gap-5 items-center justify-center">
            <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex items-center justify-center">
              <FaCashRegister size={25} color="white" />
            </div>
            <button
              type="button"
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
              type="button"
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
        />
      )}
    </div>
  )
}

export default Basket
