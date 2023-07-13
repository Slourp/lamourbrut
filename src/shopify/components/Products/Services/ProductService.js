/* eslint-disable no-console */
class ProductService {
  constructor(repository) {
    this.repository = repository
  }

  async getAllProducts() {
    try {
      const products = await this.repository.fetchAllProducts()
      return products
    } catch (error) {
      console.error('Error fetching all products:', error)
      return []
    }
  }

  async getProductDetails(productId) {
    try {
      const product = await this.repository.fetchProductDetails(
        productId
      )
      return product
    } catch (error) {
      console.error('Error fetching product details:', error)
      return null
    }
  }
}

export default ProductService
