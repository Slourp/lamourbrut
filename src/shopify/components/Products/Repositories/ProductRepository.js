class ProductRepository {
  fetchAllProducts() {
    // eslint-disable-next-line no-console
    console.log(this)
    throw new Error('fetchAllProducts() method must be implemented')
  }

  fetchProductDetails(productId) {
    // eslint-disable-next-line no-console
    console.log(this)

    throw new Error(
      'fetchProductDetails() method must be implemented'
    )
  }
}

export default ProductRepository
