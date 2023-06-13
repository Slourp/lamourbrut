import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import { BsFillBasket3Fill } from 'react-icons/bs'
import Basket from './Basket'
import ProductsDetails from './ProductsDetails'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartId, setCartId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const client = Client.buildClient({
    storefrontAccessToken: '1d9f0f0b44a441917d1d68078f320d0f',
    domain: '0b2812-2.myshopify.com',
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

  const handleAddToCart = async (variantId) => {
    const lineItemToAdd = {
      variantId,
      quantity: 1,
    }

    try {
      const updatedCart = await client.checkout.addLineItems(cartId, [
        lineItemToAdd,
      ])
      console.log('Produit ajouté au panier !')

      // Récupérer l'article ajouté au panier
      const addedItem = updatedCart.lineItems.find(
        (item) => item.variant.id === variantId
      )

      if (addedItem) {
        setCartItems((prevItems) => [...prevItems, addedItem])
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du produit au panier :",
        error
      )
    }
  }

  const handleShowCart = () => {
    const cartContent = cartItems.map((item) => item.title).join(', ')
    console.log(`Contenu du panier : ${cartContent}`)
  }

  const CartItem = ({ itemId, name, imgSrc, price }) => (
    <li>
      <h4>{name}</h4>
      <img src={imgSrc} alt={name} />
      <p>Prix : {price}</p>
    </li>
  )

  if (selectedProduct) {
    return (
      <ProductsDetails
        product={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        handleAddToCart={handleAddToCart}
      />
    )
  }

  return (
    <div className="flex flex-col bg-lbpinklight pt-[130px]">
      <h2 className="font-arial-black text-[100px] text-lbpink px-[190px] absolute">
        Products
      </h2>
      <ul className="flex justify-center flex-wrap  mx-auto gap-[120px] pt-[70px]">
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`bg-white w-[450px] border border-gray-200 p-5 rounded ${
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
            </div>

            <button
              className="mt-3 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-blue-600"
              onClick={() =>
                product.variants &&
                product.variants.length > 0 &&
                handleAddToCart(product.variants[0].id)
              }
            >
              <BsFillBasket3Fill />
            </button>
          </li>
        ))}
      </ul>

      <Basket cartItems={cartItems} CartItem={CartItem} />
    </div>
  )
}

export default Products
