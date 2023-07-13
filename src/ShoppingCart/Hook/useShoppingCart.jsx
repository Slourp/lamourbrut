import { useState, useEffect } from 'react'
import {
  AddToCartCommand,
  DeleteProductCommand,
  IncreaseProductCommand,
  DecreaseProductCommand,
  ResetCartCommand,
} from '../Command'

const useShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
  })
  const [commandStack, setCommandStack] = useState([])
  const [isOpen, setIOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const executeCommand = (command) => {
    command.execute()
    setCommandStack((prevStack) => [...prevStack, command])
  }

  const undoCommand = () => {
    // No commands to undo
    if (commandStack?.length === 0) return

    const [lastCommand, ...restCommands] = commandStack
    lastCommand.undo() // Undo the command

    setCommandStack(restCommands) // Update the command stack with the remaining commands
  }

  const addToCart = (product) => {
    const command = new AddToCartCommand(product, setCart)
    executeCommand(command)
  }

  const deleteProduct = (productId) => {
    const command = new DeleteProductCommand(productId, setCart)
    executeCommand(command)
  }

  const increaseProduct = (productId) => {
    const command = new IncreaseProductCommand(productId, setCart)
    executeCommand(command)
  }

  const decreaseProduct = (productId) => {
    const command = new DecreaseProductCommand(productId, setCart)
    executeCommand(command)
  }

  const resetCart = () => {
    const command = new ResetCartCommand(setCart)
    executeCommand(command)
  }

  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  }

  const openShoppingCart = () => {
    setIOpen(true)
  }
  const closeShoppingCart = () => {
    setIOpen(false)
  }

  return {
    cart,
    isOpen,
    closeShoppingCart,
    openShoppingCart,
    addToCart,
    deleteProduct,
    resetCart,
    increaseProduct,
    decreaseProduct,
    undoCommand,
    calculateTotal,
  }
}

export default useShoppingCart
