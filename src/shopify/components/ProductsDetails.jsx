import React, { useEffect } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { TbTruckDelivery, TbRulerMeasure } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'

const ProductsDetails = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0) // Fait défiler la page vers le haut lorsque le composant se monte
  }, [])

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <div className="flex justify-around  mt-[100px]">
          <div>
            <div className="flex justify-center">
              {product.images && product.images.length > 0 && (
                <img
                  className="w-[500px]"
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
                    className="product-image w-[500px] h-[500px] object-cover my-2 cursor-pointer"
                    src={image.src}
                    alt={product.title}
                  />
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl">{product.title}</h3>
            {product.variants && product.variants.length > 0 && (
              <p className="mb-5">
                {product.variants[0].price.amount}{' '}
                {product.variants[0].price.currencyCode}
              </p>
            )}
            <div />

            <div className="flex gap-5 items-center">
              <div
                style={{
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FaShoppingCart size={30} color="white" />
              </div>
              <p>ADD TO CART</p>
            </div>

            <div className="py-5 flex justify-start gap-7">
              <div>
                <TbRulerMeasure size={30} />
                <p className="text-xs text-center">SIZE</p>
              </div>
              <div>
                <TbTruckDelivery size={30} />
                <p className="text-xs text-center">DELIVERY</p>
              </div>
            </div>
            {product.description && (
              <p className="max-w-[600px] leading-9">
                {product.description}
              </p>
            )}
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
