class AddToCartCommand {
  constructor(product, setCart) {
    this.product = product
    this.setCart = setCart
    this.isExecuted = false
  }

  execute() {
    this.setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === this.product.id
      )

      const updatedCart = [...prevCart]

      if (existingProductIndex === -1) {
        updatedCart.push({ ...this.product, quantity: 1 })
      } else {
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        }
      }

      this.isExecuted = true
      return updatedCart
    })
  }

  undo() {
    if (this.isExecuted) {
      this.setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex(
          (item) => item.id === this.product.id
        )

        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart]
          const existingProduct = updatedCart[existingProductIndex]

          if (existingProduct.quantity === 1) {
            updatedCart.splice(existingProductIndex, 1)
          } else {
            updatedCart[existingProductIndex] = {
              ...existingProduct,
              quantity: existingProduct.quantity - 1,
            }
          }

          return updatedCart
        }

        return prevCart
      })
    }
  }
}

export default AddToCartCommand
