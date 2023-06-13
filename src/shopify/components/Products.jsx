import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import Basket from './Basket'

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

  return (
    <div className="flex flex-col">
      <ul className="mt-[150px] flex max-w-[1200px] mx-auto gap-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="border border-gray-200 p-5 rounded"
          >
            <h3 className="text-lg font-semibold">{product.title}</h3>
            {product.variants && product.variants.length > 0 && (
              <p className="text-gray-600">
                Prix : {product.variants[0].price.amount}{' '}
                {product.variants[0].price.currencyCode}
              </p>
            )}
            {product.images && product.images.length > 0 && (
              <img
                className="w-[300px]"
                src={product.images[0].src}
                alt={product.title}
                onClick={() => handleProductClick(product)}
              />
            )}
            {selectedProduct === product && (
              <p className="mt-3 text-gray-700">
                {product.description}
              </p>
            )}

            {product.variants && product.variants.length > 0 && (
              <select className="mt-3 p-2 border border-gray-300 rounded">
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.title}
                  </option>
                ))}
              </select>
            )}

            <button
              className="mt-3 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-blue-600"
              onClick={() =>
                product.variants &&
                product.variants.length > 0 &&
                handleAddToCart(product.variants[0].id)
              }
            >
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 w-[1200px] h-[600px]">
            <h3 className="text-lg font-semibold">
              {selectedProduct.title}
            </h3>
            {selectedProduct.images &&
              selectedProduct.images.length > 0 && (
                <img
                  className="w-[300px]"
                  src={selectedProduct.images[0].src}
                  alt={selectedProduct.title}
                />
              )}
            {selectedProduct.variants &&
              selectedProduct.variants.length > 0 && (
                <p className="text-gray-600">
                  Prix : {selectedProduct.variants[0].price.amount}{' '}
                  {selectedProduct.variants[0].price.currencyCode}
                </p>
              )}
            <p className="mt-3 text-gray-700">
              {selectedProduct.description}
            </p>
            <button
              className="mt-3 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-blue-600"
              onClick={() => setSelectedProduct(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
      <Basket cartItems={cartItems} CartItem={CartItem} />
    </div>
  )
}

export default Products
