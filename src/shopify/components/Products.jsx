import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import { BsFillBasket3Fill } from 'react-icons/bs'
import ProductsDetails from './ProductsDetails'
import Basket from './Basket'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cartId, setCartId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([]) // Ajout de l'état cartItems
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

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product.title]) // Ajout du produit au panier
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
    <div className="flex flex-col pt-[130px] bg-lbyellow">
      <h2 className="font-arial-black text-[120px] text-lbpink  rotate absolute">
        SHOP
      </h2>
      <h2 className="font-arial-black text-[40px] text-lbgreenlight px-[335px] absolute ">
        NEW ARRIVALS
      </h2>
      <ul className="grid grid-cols-2 mx-auto gap-[130px] pt-[70px]">
        {products.map((product, index) => (
          <li
            key={product.id}
            className={` w-[300px] border-4 border-lbgreenlight  p-5 rounded hover:border-lbpink ${
              index % 2 === 0 ? '' : ''
            }`}
          >
            {product.images && product.images.length > 0 && (
              <img
                className="w-full h-auto mx-auto h-[300px] object-cover cursor-pointer"
                src={product.images[0].src}
                alt={product.title}
                onClick={() => handleProductClick(product)}
              />
            )}
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>
              {product.variants && product.variants.length > 0 && (
                <p className="text-gray-600">
                  {product.variants[0].price.amount}{' '}
                  {product.variants[0].price.currencyCode}
                </p>
              )}
              <BsFillBasket3Fill
                className="text-2xl text-lbpink cursor-pointer"
                onClick={() => handleAddToCart(product)} // Ajout du gestionnaire d'événements onClick
              />
            </div>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && <Basket cartItems={cartItems} />} //
      Correction ici
    </div>
  )
}

export default Products
