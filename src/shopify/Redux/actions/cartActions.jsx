// cartActions.js

export const addItem = (itemId) => {
  return {
    type: 'ADD_ITEM',
    payload: itemId,
  }
}

export const increaseQuantity = (itemId) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: itemId,
  }
}

export const decreaseQuantity = (itemId) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: itemId,
  }
}

export const deleteItem = (itemId) => {
  return {
    type: 'DELETE_ITEM',
    payload: itemId,
  }
}
