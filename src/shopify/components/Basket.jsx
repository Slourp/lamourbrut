import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSadTear, FaTrash } from 'react-icons/fa'

const Basket = ({ cartItems, products, onClose, onRemoveItem }) => {
  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId)
  }

  const closeBasket = () => {
    onClose()
  }

  return (
    <div className="fixed pt-12 right-0 top-0 bottom-0 w-[400px] h-full bg-lbpink z-10">
      <div className="p-4 mt-auto">
        <AiOutlineClose
          onClick={closeBasket}
          size={50}
          className="cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[35px] pt-10 font-bold font-times-new-roman text-center">
          MY CART
        </h3>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div className="p-4">
          {cartItems.map((item, index) => {
            const product = products.find((p) => p.id === item.id)

            return (
              <div key={index} className="flex items-center mb-4">
                {product.images && product.images.length > 0 && (
                  <img
                    className="w-20 h-20 mr-2 object-cover"
                    src={product.images[0].src}
                    alt={product.title}
                  />
                )}
                <p className="text-[12px] font-bold">
                  {product.title}
                </p>
                <p className="ml-auto text-[16px]">
                  {item.quantity} x {product.variants[0].price.amount}{' '}
                  {product.variants[0].price.currencyCode}
                </p>
                <FaTrash
                  className="ml-2 text-red-500 cursor-pointer"
                  size={20}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <div className="border-2 rounded bg-lbpinklight border-lbgreenlight h-[350px] w-[300px] mx-auto flex items-center justify-center flex-col gap-5">
          <p className="font-arial-black text-[30px] text-center">
            MY CART IS EMPTY
          </p>
          <FaSadTear className="text-yellow-500" size={60} />
        </div>
      )}
    </div>
  )
}

export default Basket
