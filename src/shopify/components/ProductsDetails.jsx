import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import { HiArrowLeft, HiX } from 'react-icons/hi'
import { TbTruckDelivery, TbRulerMeasure } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'
import Basket from './Basket'

const ProductDetails = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const [products, setProducts] = useState([])
  const [cartId, setCartId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [isProductAdded, setIsProductAdded] = useState(false)
  const [isDetailsSelected, setIsDetailsSelected] = useState(false)
  const [isSizeSelected, setIsSizeSelected] = useState(false)
  const [isDeliverySelected, setIsDeliverySelected] = useState(false)
  const [showDelivery, setShowDelivery] = useState(false)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const client = Client.buildClient({
    storefrontAccessToken: '066e26865bdd41f342997f449e1ea7a3',
    domain: '10a614.myshopify.com',
  })

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleDetailsClick = () => {
    setIsDetailsSelected(true)
    setIsDeliverySelected(false)
    setShowDelivery(false)
  }

  const handleDeliveryClick = () => {
    setIsDetailsSelected(false)
    setIsDeliverySelected(true)
    setShowDelivery(true)
  }

  const handleSizeClick = () => {
    setIsDetailsSelected(false)
    setIsSizeSelected(true)
    setIsDeliverySelected(true)
    setShowDelivery(true)
  }

  const handleDescriptionClick = () => {
    setIsDetailsSelected(false)
    setIsDeliverySelected(false)
    setShowDelivery(false)
  }

  const handleAddToCartOnce = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (existingItemIndex === -1) {
      const newItem = { id: product.id, quantity: 1 }
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
    setIsProductAdded(false)
  }

  const handleCarouselOpen = (startIndex) => {
    setCurrentImageIndex(startIndex)
    setIsCarouselOpen(true)
  }

  const handleCarouselClose = () => {
    setIsCarouselOpen(false)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="pt-10 w-[100%] bg-lbyellow max-xs:flex max-md:flex">
      <div className="flex flex-col">
        <div className="flex justify-around mt-10 max-xs:flex-col max-md:flex-col">
          <div className="w-[500px] max-xs:max-w-[70%] max-md:w-full">
            <div className="flex justify-center">
              {product.images && product.images.length > 0 && (
                <img
                  className="w-full cursor-pointer"
                  src={product.images[0].src}
                  alt={product.title}
                  onClick={() => handleCarouselOpen(0)}
                />
              )}
            </div>
            <div className="flex flex-col items-center mt-5">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    className={`product-image w-full h-auto object-cover my-2 cursor-pointer ${
                      isCarouselOpen ? 'carousel-open' : ''
                    }`}
                    src={image.src}
                    alt={product.title}
                    onClick={() => handleCarouselOpen(index)}
                  />
                ))}
            </div>
          </div>
          <div className="w-[500px] max-md:mx-auto max-xs:mx-auto max-xs:max-w-[100%]">
            <h3 className="text-3xl">{product.title}</h3>
            {product.variants && product.variants.length > 0 && (
              <p className="mb-5">
                {product.variants[0].price.amount}{' '}
                {product.variants[0].price.currencyCode}
              </p>
            )}
            <div className="flex gap-5 items-center">
              <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex justify-center items-center">
                <FaShoppingCart
                  onClick={() => handleAddToCartOnce(product)}
                  size={30}
                  color="white"
                />
              </div>
            </div>
            <div className="border-dashed border-2 border-black my-8" />
            <div className="py-0 flex justify-start gap-7">
              <div
                className={`cursor-pointer flex flex-col items-center ${
                  isDetailsSelected ? 'underline' : ''
                }`}
                onClick={handleDetailsClick}
              >
                <MdDescription
                  size={30}
                  onClick={handleDescriptionClick}
                />
                <p className="text-xs text-center">DETAILS</p>
              </div>
              <div className="cursor-pointer flex flex-col items-center">
                <TbRulerMeasure size={30} />
                <p className="text-xs text-center">SIZE & FIT</p>
              </div>
              <div
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
              className="max-w-[600px] mt-5 leading-9 max-xs:max-w-[80%]"
              style={{ minHeight: '100px' }}
            >
              {showDelivery ? (
                <p>
                  Worldwide shipping with Colissimo. All sales are
                  final.
                </p>
              ) : (
                <p>{product.description}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/test'
              }}
              className="text-black flex items-center text-xl font-extrabold border-6 border-black uppercase p-1 px-5 mt-12"
              style={{ border: '2px solid black' }}
            >
              <HiArrowLeft className="mr-4" /> Back
            </button>
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

      {isCarouselOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <HiX
              className="absolute top-2 right-2 text-white cursor-pointer"
              size={24}
              onClick={handleCarouselClose}
            />
            <img
              className="w-full max-h-[100vh] object-contain"
              src={product.images[currentImageIndex].src}
              alt={product.title}
            />
            {product.images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <button
                  className="bg-white rounded-full w-6 h-6 mr-2 focus:outline-none"
                  onClick={handlePrevImage}
                >
                  {'<'}
                </button>
                <button
                  className="bg-white rounded-full w-6 h-6 ml-2 focus:outline-none"
                  onClick={handleNextImage}
                >
                  {'>'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
