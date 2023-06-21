import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import { BsFillBasket3Fill } from 'react-icons/bs'
import ProductsDetails from './ProductsDetails'
import Basket from './Basket'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cartId, setCartId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [isProductAdded, setIsProductAdded] = useState(false)
  const client = Client.buildClient({
    storefrontAccessToken: '066e26865bdd41f342997f449e1ea7a3',
    domain: '10a614.myshopify.com',
  })

  useEffect(() => {
    const initializeCart = async () => {
      const existingCartId = localStorage.getItem('cartId')
      if (existingCartId) {
        setCartId(existingCartId)
      } else {
        const newCart = await client.checkout.create()
        setCartId(newCart.id)
        localStorage.setItem('cartId', newCart.id)
      }
    }

    initializeCart()
  }, [])

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
  }, [])

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
    setIsProductAdded(false)
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
    <div className="flex flex-col pt-[130px] pb-8 bg-lbyellow">
      <div className="flex gap-5 absolute ml-8">
        <p className="font-arial-black text-[110px] max-xs:text-[40px] max-xs:text-center max-md:text-[70px] text-lbpink">
          New
        </p>
        <p className="font-arial-black text-[110px] max-xs:text-[40px] max-xs:text-center max-md:text-[70px] text-lbpink">
          Arrivals
        </p>
      </div>

      <ul className="grid grid-cols-2 mx-auto gap-[60px] pt-[140px] max-md:grid-cols-1 max-xs:grid-cols-1 max-xs:pt-12 max-md:pt-[90px]">
        {products.map((product, index) => (
          <li
            key={product.id}
            className={` w-[600px] border-1 bg-white p-5 rounded max-xs:w-[350px] max-md:w-[700px] ${
              index % 2 === 0 ? '' : ''
            }`}
          >
            {product.images && product.images.length > 0 && (
              <img
                className="w-full h-auto mx-auto h-[300px] max-xs:w-screen object-cover cursor-pointer"
                src={product.images[0].src}
                alt={product.title}
                onClick={() => handleProductClick(product)}
              />
            )}
            <div className="flex justify-between mt-3">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>
              {product.variants && product.variants.length > 0 && (
                <p className="text-gray-600">
                  {product.variants[0].price.amount}{' '}
                  {product.variants[0].price.currencyCode}
                </p>
              )}
            </div>
          </li>
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
