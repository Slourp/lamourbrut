/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import Headline from '../../../components/shared/Headline'
import { headline5 } from '../../../data/headlines'
import ProductsDetails from './ProductsDetails'
import Basket from '../Basket/Basket'
import useProducts from './Hook/useProduct'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const { products } = useProducts()

  const client = Client.buildClient({
    storefrontAccessToken: '066e26865bdd41f342997f449e1ea7a3',
    domain: '10a614.myshopify.com',
  })

  useEffect(() => {
    const initializeCart = async () => {
      const existingCartId = localStorage.getItem('cartId')
      if (!existingCartId) {
        const newCart = await client.checkout.create()
        localStorage.setItem('cartId', newCart.id)
      }
    }

    initializeCart()
  }, [client.checkout])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleRemoveItem = (itemId) => {
    console.log('handleRemoveItem', itemId)
  }

  const handleAddItem = (itemId) => {
    console.log('handleAddItem', itemId)
  }

  const handleDeleteItem = (itemId) => {
    console.log('handleDeleteItem', itemId)
  }

  const handleCloseBasket = () => {
    console.log('handleCloseBasket')
    // setCartItems([])
  }

  return selectedProduct ? (
    <ProductsDetails
      product={selectedProduct}
      setSelectedProduct={setSelectedProduct}
    />
  ) : (
    <div className="flex flex-col  bg-white">
      <div className="mt-12 fixed-top overflow-hidden">
        <div className="flex justify-center top-9 overflow-hidden max-w-screen">
          <Headline
            className="overflow-hidden"
            headlines={headline5}
            backgroundColor="bg-black"
            textColor="text-white"
            textSize={32}
          />
        </div>
      </div>
      <ul className="flex justify-around flex-wrap pt-10">
        {products.map((product) => (
          <button
            type="button"
            key={product.id}
            className="w-[600px] border-4 border-lbpink p-3 rounded max-xl:w-[80%] max-md:w-[90%] max-sm:w-[80%] max-xs:w-[350px] my-5 clickable"
            onClick={() => handleProductClick(product)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleProductClick(product)
              }
            }}
          >
            {product.images && product.images.length > 0 && (
              <img
                className="w-full h-auto object-cover cursor-pointer"
                src={product.images[0].src}
                alt={product.title}
              />
            )}
            <div className="flex justify-between mt-3">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>
              {product.variants && product.variants.length > 0 && (
                <p className="text-black">
                  {product.variants[0].price.amount}{' '}
                  {product.variants[0].price.currencyCode}
                </p>
              )}
            </div>
          </button>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <Basket
          cartItems={cartItems}
          products={products}
          onClose={handleCloseBasket}
          onRemoveItem={handleRemoveItem}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  )
}

export default Products
