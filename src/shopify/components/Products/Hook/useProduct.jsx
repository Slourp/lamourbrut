/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import ShopifyProductRepositoryStrategy from '../Repositories/ShopifyProductRepositoryStrategy'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const repository = new ShopifyProductRepositoryStrategy()

  const fetchAllProducts = async () => {
    try {
      const allProducts = await repository.fetchAllProducts()
      setProducts(allProducts)
    } catch (error) {
      console.error('Error fetching all products:', error)
    }
  }

  const fetchProductDetails = async (productId) => {
    try {
      const product = await repository.fetchProductDetails(productId)
      setSelectedProduct(product)
    } catch (error) {
      console.error('Error fetching product details:', error)
    }
  }

  useEffect(() => {
    const fetchProductDetailsIfNeeded = async () => {
      if (selectedProduct && !selectedProduct.details) {
        await fetchProductDetails(selectedProduct.id)
      }
    }

    fetchProductDetailsIfNeeded()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct])

  return {
    products,
    selectedProduct,
    fetchAllProducts,
    fetchProductDetails,
  }
}

export default useProducts
