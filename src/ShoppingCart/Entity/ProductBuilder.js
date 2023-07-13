import Product from './Product'

class ProductBuilder {
  constructor() {
    this.product = new Product()
  }

  withId(id) {
    this.product.id = id
    return this
  }

  withTitle(title) {
    this.product.title = title
    return this
  }

  withPrice(price) {
    this.product.price = price
    return this
  }

  withQuantity(quantity) {
    this.product.quantity = quantity
    return this
  }

  build() {
    return this.product
  }

  withAllParamsForShoppingCart(item) {
    const variant = item.variants.find(
      (variant) => variant?.price?.attrs?.amount?.value
    )
    const price = variant?.price?.attrs?.amount?.value ?? 0

    return this.withId(item.attrs.id.value)
      .withTitle(item.attrs.title.value)
      .withPrice(+price)
      .withQuantity(1)
  }
}

export default ProductBuilder
