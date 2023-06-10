import React from 'react'

const CartItem = ({ itemId, name, imgSrc, price }) => {
  return (
    <li>
      <div>
        <img src={imgSrc} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>Prix : {price}</p>
      </div>
    </li>
  )
}

export default CartItem
