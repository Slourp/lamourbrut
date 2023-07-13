class DeleteProductCommand {
  constructor(productId, setCart) {
    this.productId = productId
    this.setCart = setCart
    this.removedProduct = null
  }

  execute() {
    this.setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== this.productId
      )
      this.removedProduct = prevCart.find(
        (product) => product.id === this.productId
      )
      return updatedCart
    })
  }

  undo() {
    if (this.removedProduct) {
      this.setCart((prevCart) => [...prevCart, this.removedProduct])
    }
  }
}

export default DeleteProductCommand
