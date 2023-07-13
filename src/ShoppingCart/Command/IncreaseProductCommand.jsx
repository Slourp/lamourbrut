class IncreaseProductCommand {
  constructor(productId, setCart) {
    this.productId = productId
    this.setCart = setCart
    this.updatedCart = null
  }

  execute() {
    this.setCart((prevCart) => {
      this.updatedCart = prevCart.map((product) => {
        return product.id === this.productId
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      })

      return this.updatedCart
    })
  }

  undo() {
    this.setCart(this.updatedCart)
  }
}

export default IncreaseProductCommand
