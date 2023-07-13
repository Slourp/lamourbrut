class ResetCartCommand {
  constructor(setCart) {
    this.setCart = setCart
    this.previousCart = null
  }

  execute() {
    this.previousCart = this.setCart((prevCart) => {
      this.previousCart = prevCart // Store the reference to the previous cart
      return [] // Set the cart to an empty array
    })
  }

  undo() {
    if (this.previousCart !== null) {
      this.setCart(this.previousCart) // Restore the previous cart state
    }
  }
}

export default ResetCartCommand
