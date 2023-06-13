import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'

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
            <h3 className='text-[60px]'>{product.title}</h3>

            {product.variants && product.variants.length > 0 && (
              <p className='mb-5'>
                {product.variants[0].price.amount}{' '}
                {product.variants[0].price.currencyCode}
              </p>
            )}
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
