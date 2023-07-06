import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Client from 'shopify-buy'
import { HiArrowLeft } from 'react-icons/hi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'
import { CiDeliveryTruck } from 'react-icons/ci'
import Basket from '../Basket/Basket'

const ProductDetails = ({ product }) => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isDetailsSelected, setIsDetailsSelected] = useState(false)
  const [isDeliverySelected, setIsDeliverySelected] = useState(false)

  const client = Client.buildClient({
    storefrontAccessToken: '066e26865bdd41f342997f449e1ea7a3',
    domain: '10a614.myshopify.com',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const initializeCart = async () => {
      const existingCartId = localStorage.getItem('cartId')
      if (!existingCartId) {
        const newCart = await client.checkout.create()
        localStorage.setItem('cartId', newCart.id)
      }
    }

    initializeCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.product.fetchAll()

      const detailedProducts = await Promise.all(
        fetchedProducts.map(async (fetchedProduct) => {
          const produit = await client.product.fetch(
            fetchedProduct.id
          )
          return produit
        })
      )

      setProducts(detailedProducts)
    }

    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDetailsClick = () => {
    setIsDetailsSelected(true)
    setIsDeliverySelected(false)
  }

  const handleDeliveryClick = () => {
    setIsDetailsSelected(false)
    setIsDeliverySelected(true)
  }

  const handleDescriptionClick = () => {
    setIsDetailsSelected(false)
    setIsDeliverySelected(false)
  }

  const handleAddToCartOnce = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    )

    if (existingItemIndex === -1) {
      const newItem = { id: item.id, quantity: 1 }
      setCartItems([...cartItems, newItem])
    }
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

  const handleCarouselOpen = () => {}

  const handleAddToCart = () => {
    handleAddToCartOnce(product)
  }

  return (
    <div className="pt-10 pb-10 h-full w-screen bg-green-500">
      <div className="flex flex-col">
        <div className="flex justify-center gap-10 mt-10 max-xs:flex-col max-md:flex-col">
          {/* PHOTOS SECTIONS */}
          <div className="border-1 xl:w-[700px] bg-white p-5 rounded max-xs:w-[70%]">
            <div>
              {product.images &&
                product.images.length > 0 &&
                product.images.map((image) => (
                  <button
                    type="button"
                    key={uuidv4()}
                    className="w-full cursor-pointer"
                    onClick={() => handleCarouselOpen(image.id)}
                  >
                    <img src={image.src} alt={product.title} />
                  </button>
                ))}
            </div>
          </div>

          {/* DESCRIPTION PRODUCTS */}
          <div>
            <div className="xl:mt-[50px]">
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/shop'
                }}
                className="text-black flex items-center text-xl font-extrabold border-6 border-black uppercase p-1 px-5 max-xs:mx-auto max-xs:border-2 max-xs:px-2 py-0 max-xs:text-[12px]"
                style={{ border: '2px solid black' }}
              >
                <HiArrowLeft className="mr-4" /> Back
              </button>
              <div className="max-xs:flex flex-col justify-center items-center">
                <p className="font-times-new-roman pt-5 pb-5" />
                <h3 className="text-[40px] max-xl:text-[35px] max-md:text-[30px] max-sm:text-[25px] max-xs:text-[22px]">
                  {product.title}
                </h3>
              </div>

              <div>
                {product.variants && product.variants.length > 0 && (
                  <div className="flex gap-0">
                    <p>{product.variants[0].price.amount}</p>
                    <p>
                      <span>€</span>
                    </p>
                  </div>
                )}
              </div>

              <div
                className="flex gap-3 mt-4 items-center cursor-pointer"
                onClick={handleAddToCart}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex justify-center items-center">
                  <FaShoppingCart size={25} color="white" />
                </div>
                <p className="font-bold">ADD TO CART</p>
              </div>

              <div className="border border-dashed border-black my-8 w-full max-xs:w-full" />

              {/* DETAILS PRODUCTS */}
              <div className="py-0 flex gap-7 max-xs:justify-center">
                <div
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                  className={`flex flex-col items-center ${
                    isDetailsSelected ? 'underline font-bold' : ''
                  }`}
                  onClick={handleDetailsClick}
                >
                  <MdDescription
                    size={30}
                    onClick={handleDescriptionClick}
                  />
                  <p className="text-xs text-center">DETAILS</p>
                </div>

                <div
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                  className={`cursor-pointer flex flex-col items-center ${
                    isDeliverySelected ? 'underline font-bold' : ''
                  }`}
                  onClick={handleDeliveryClick}
                >
                  <TbTruckDelivery size={30} />
                  <p className="text-xs text-center">DELIVERY</p>
                </div>
              </div>

              <div
                className={`max-w-[600px] mt-5 leading-9 max-xs:max-w-[100%] ${
                  isDeliverySelected ? '' : ''
                }`}
              >
                <p className="section-text">{product.description}</p>
              </div>

              {isDeliverySelected && (
                <div className="flex  items-center gap-3 max-w-[600px] mt-5 leading-9 max-xs:max-w-[100%]">
                  <CiDeliveryTruck size={30} />
                  <p className="section-text">
                    Worldwide shipping with Colissimo.{' '}
                    <strong>All sales are final.</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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

export default ProductDetails
