// cartReducer.js

const initialState = {
  cartItems: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        }),
      }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          }
          return item
        }),
      }

    case 'DELETE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      }

    default:
      return state
  }
}

export default cartReducer
