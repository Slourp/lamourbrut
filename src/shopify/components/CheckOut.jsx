import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'


const CheckOut = ({ selectedItem, totalPrice, onBuy }) => {
  return (
    <div className="mt-[150px] flex flex-col justify-center items-center">
      <h2 className="text-xl">Récapitulatif de la commande</h2>
      {selectedItem && (
        <div key={selectedItem.id}>
          {selectedItem.images && selectedItem.images.length > 0 && (
            <img
              className="w-20 h-20"
              src={selectedItem.images[0].src}
              alt={selectedItem.title}
            />
          )}
          <p>{selectedItem.title}</p>
          <p>{selectedItem.description}</p>
        </div>
      )}
      <p>Total: {totalPrice} €</p>
      <button onClick={onBuy}>BUY</button>
      <button
              type="button"
              onClick={() => {
                window.location.href = '/test'
              }}
              className="text-black flex items-center text-xl font-extrabold border-6 border-black uppercase p-1 px-5 mt-12"
              style={{ border: '2px solid black' }}
            >
              <HiArrowLeft className="mr-4" /> Back
            </button>
    </div>
  )
}

export default CheckOut
