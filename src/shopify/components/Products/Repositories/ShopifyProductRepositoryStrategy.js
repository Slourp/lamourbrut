import Client from 'shopify-buy'
import ProductRepository from './ProductRepository'

class ShopifyProductRepositoryStrategy extends ProductRepository {
  constructor() {
    super()
    this.client = Client.buildClient({
      storefrontAccessToken: '066e26865bdd41f342997f449e1ea7a3',
      domain: '10a614.myshopify.com',
    })
  }

  async fetchAllProducts() {
    try {
      const fetchedProducts = await this.client.product.fetchAll()
      return fetchedProducts
    } catch (error) {
      // Handle error
      return []
    }
  }

  async fetchProductDetails(productId) {
    try {
      const product = await this.client.product.fetch(productId)
      return product
    } catch (error) {
      // Handle error
      return null
    }
  }
}

export default ShopifyProductRepositoryStrategy
