import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { TbTruckDelivery, TbRulerMeasure } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'

const ProductsDetails = ({ product }) => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col">
        <div className="flex justify-around items-center">
          {product.images && product.images.length > 0 && (
            <img
              className="w-[500px]"
              src={product.images[0].src}
              alt={product.title}
            />
          )}
          <div>
            <h3 className="text-[60px]">{product.title}</h3>

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
            {/* Ajoutez d'autres informations du produit ici */}
            <button
              type="button"
              onClick={() => {
                window.location.href = '/test'
              }}
              className="text-black flex items-center text-[24px] font-extrabold border-[6px] border-black uppercase p-1 px-5 mt-12"
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
