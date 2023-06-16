import React from 'react'

const Basket = ({ cartItems }) => {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-80 h-screen bg-lbpink">
      <div className="p-4 ">
        <h3 className="text-xl font-bold">Mon Panier</h3>
      </div>
      <div className="p-4">
        {cartItems &&
          cartItems.map(
            (
              item,
              index // Ajout de la vérification cartItems
            ) => <p key={index}>{item}</p>
          )}
      </div>
      <div className="p-4 mt-auto border-t border-gray-200" />
    </div>
  )
}

export default Basket
