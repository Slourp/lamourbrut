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
    <div className="flex flex-col bg-white pt-[130px]">
      <h2 className="font-arial-black text-[120px] text-lbpink rotate absolute">
        SHOP
      </h2>
      <h2 className="font-arial-black text-[40px] text-black px-[335px] absolute ">
        NEW ARRIVALS
      </h2>
      <ul className="grid grid-cols-2 mx-auto gap-[130px] pt-[70px]">
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`bg-white w-[300px] border border-gray-200 p-5 rounded hover:border-lbpink ${
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
              className="mt-3 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-lbpink "
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
