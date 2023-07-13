/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import ShopifyProductRepositoryStrategy from '../Repositories/ShopifyProductRepositoryStrategy'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const repository = new ShopifyProductRepositoryStrategy()

  const fetchAllProductsMutation = useMutation(
    () => repository.fetchAllProducts(),
    {
      onError: (error) =>
        console.error('Error fetching all products:', error),
      onSuccess: (data) => {
        setProducts(data)
        console.log('Products fetched:', data)
      },
    }
  )

  const fetchProductDetailsMutation = useMutation(
    (productId) => repository.fetchProductDetails(productId),
    {
      onError: (error) =>
        console.error('Error fetching product details:', error),
      onSuccess: (product) => {
        setSelectedProduct(product)
        console.log('Product details fetched:', product)
      },
    }
  )

  const fetchAllProducts = () => {
    fetchAllProductsMutation.mutate()
  }

  const fetchProductDetails = (productId) => {
    fetchProductDetailsMutation.mutate(productId)
  }

  useEffect(() => {
    fetchAllProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const fetchProductDetailsIfNeeded = () => {
      if (selectedProductId) {
        fetchProductDetails(selectedProductId)
      }
    }

    fetchProductDetailsIfNeeded()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProductId])

  const handleProductClick = (productId) => {
    setSelectedProductId(productId)
  }

  return {
    products,
    selectedProduct,
    handleProductClick,
  }
}

export default useProducts
