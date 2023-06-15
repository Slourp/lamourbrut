import React, { useEffect, useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { TbTruckDelivery, TbRulerMeasure } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'

const ProductsDetails = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isSizeSelected, setIsSizeSelected] = useState(false)
  const [isDeliverySelected, setIsDeliverySelected] = useState(false)
  const [showDelivery, setShowDelivery] = useState(false)

  const handleSizeClick = () => {
    setIsSizeSelected(true)
    setIsDeliverySelected(false)
    setShowDelivery(false)
  }

  const handleDeliveryClick = () => {
    setIsSizeSelected(false)
    setIsDeliverySelected(true)
    setShowDelivery(true)
  }

  const handleDescriptionClick = () => {
    setIsSizeSelected(false)
    setIsDeliverySelected(false)
    setShowDelivery(false)
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <div className="flex justify-around mt-10">
          <div className="w-[500px]">
            <div className="flex justify-center">
              {product.images && product.images.length > 0 && (
                <img
                  className="w-full"
                  src={product.images[0].src}
                  alt={product.title}
                />
              )}
            </div>
            <div className="flex flex-col items-center mt-5">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    className="product-image w-full h-auto object-cover my-2 cursor-pointer"
                    src={image.src}
                    alt={product.title}
                  />
                ))}
            </div>
          </div>
          <div className="w-[500px]">
            <h3 className="text-3xl">{product.title}</h3>
            {product.variants && product.variants.length > 0 && (
              <p className="mb-5">
                {product.variants[0].price.amount}{' '}
                {product.variants[0].price.currencyCode}
              </p>
            )}
            <div className="flex gap-5 items-center">
              <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex justify-center items-center">
                <FaShoppingCart size={30} color="white" />
              </div>
            </div>
            <div className="border-dashed border-2 border-black my-8" />
            <div className="py-0 flex justify-start gap-7">
              <div
                className={`cursor-pointer flex flex-col items-center ${
                  isSizeSelected ? 'underline' : ''
                }`}
                onClick={handleSizeClick}
              >
                <MdDescription
                  size={30}
                  onClick={handleDescriptionClick}
                />
                <p className="text-xs text-center">DETAILS</p>
              </div>
              <div className="cursor-pointer flex flex-col items-center">
                <TbRulerMeasure size={30} />
                <p className="text-xs text-center">SIZE & FIT</p>
              </div>
              <div
                className={`cursor-pointer flex flex-col items-center ${
                  isDeliverySelected ? 'underline font-bold' : ''
                }`}
                onClick={handleDeliveryClick}
              >
                <TbTruckDelivery size={30} />
                <p className="text-xs text-center">DELIVERY</p>
              </div>
            </div>
            <div
              className="max-w-[600px] mt-5 leading-9"
              style={{ minHeight: '100px' }}
            >
              {showDelivery ? (
                <p>
                  Worldwide shipping with Colissimo. All sales are
                  final.
                </p>
              ) : (
                <p>{product.description}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/test'
              }}
              className="text-black flex items-center text-xl font-extrabold border-6 border-black uppercase p-1 px-5 mt-12"
              style={{ border: '2px solid black' }}
            >
              <HiArrowLeft className="mr-4" /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails
