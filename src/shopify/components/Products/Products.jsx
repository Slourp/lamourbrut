import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import ProductsDetails from './ProductsDetails'
import Basket from '../Basket/Basket'

const Products = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
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

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.product.fetchAll()

      const detailedProducts = await Promise.all(
        fetchedProducts.map(async (product) => {
          const fetchedProduct = await client.product.fetch(
            product.id
          )
          return fetchedProduct
        })
      )

      setProducts(detailedProducts)
    }

    fetchProducts()
  }, [client.product])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemId
    )
    setCartItems(updatedCartItems)
  }

  const handleAddItem = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    setCartItems(updatedItems)
  }

  const handleDeleteItem = (itemId) => {
    const updatedItems = cartItems.filter(
      (item) => item.id !== itemId
    )
    setCartItems(updatedItems)
  }

  const handleCloseBasket = () => {
    setCartItems([])
  }

  if (selectedProduct) {
    return (
      <ProductsDetails
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    )
  }

  return (
    <div className="flex flex-col pt-[130px] bg-white">
      <ul className="flex justify-around flex-wrap">
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
