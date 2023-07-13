class DecreaseProductCommand {
  constructor(productId, setCart) {
    this.productId = productId
    this.setCart = setCart
    this.updatedCart = null
  }

  execute() {
    this.setCart((prevCart) => {
      this.updatedCart = prevCart.map((product) => {
        if (product.id === this.productId) {
          const updatedQuantity = product.quantity - 1
          return {
            ...product,
            quantity: updatedQuantity >= 0 ? updatedQuantity : 0,
          }
        }
        return product
      })

      return this.updatedCart
    })
  }

  undo() {
    this.setCart(this.updatedCart)
  }
}

export default DecreaseProductCommand
