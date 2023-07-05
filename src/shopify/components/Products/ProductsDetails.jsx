import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import { HiArrowLeft, HiX } from 'react-icons/hi'
import { TbTruckDelivery, TbRulerMeasure } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'
import Basket from '../Basket/Basket'

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
      setIsProductAdded(true) // Ajout de cette ligne pour indiquer que le produit a été ajouté au panier
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

  const handleAddToCart = () => {
    handleAddToCartOnce(product)
  }

  return (
    <div className="pt-10 pb-10 h-full bg-green-500">
      <div className="flex flex-col">
        <div className="flex justify-center mt-10 max-xs:flex-col max-md:flex-col gap-8">
          <div className="mx-auto border-1 xl:w-[600px] bg-white p-5 rounded max-xs:w-[70%]">
            <div>
              {product.images && product.images.length > 0 && (
                <img
                  className="w-full cursor-pointer "
                  src={product.images[0].src}
                  alt={product.title}
                  onClick={() => handleCarouselOpen(0)}
                />
              )}
            </div>
            <div className="flex flex-col">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    className={` object-cover cursor-pointer ${
                      isCarouselOpen ? 'carousel-open' : ''
                    }`}
                    src={image.src}
                    alt={product.title}
                    onClick={() => handleCarouselOpen(index)}
                  />
                ))}
            </div>
          </div>

          <div className="flex justify-center">
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
              >
                <div className="cursor-pointer bg-black rounded-full w-12 h-12 flex justify-center items-center">
                  <FaShoppingCart size={25} color="white" />
                </div>
                <p className="font-bold">ADD TO CART</p>
              </div>

              <div className="border border-dashed border-black my-8 w-full max-xs:w-full" />

              <div className="py-0 flex gap-7 max-xs:justify-center">
                <div
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
                  isDeliverySelected ? 'hidden' : ''
                }`}
              >
                <p className="section-text">{product.description}</p>
              </div>

              {isDeliverySelected && (
                <div className="max-w-[600px] mt-5 leading-9 max-xs:max-w-[100%]">
                  <p className="section-text">
                    Worldwide shipping with Colissimo. All sales are
                    final.
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

      {isCarouselOpen && (
        <div className="fixed h-[100%] top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full cursor-pointer bg-white"
                    onClick={handlePrevImage}
                  />
                  <div
                    className="w-2 h-2 rounded-full cursor-pointer bg-white"
                    onClick={handleNextImage}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
