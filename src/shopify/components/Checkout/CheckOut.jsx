import React from 'react'
import FormCheckout from './FormCheckOut'
import CheckOutDetails from './CheckOutDetails'
import Footer from '../../../layout/Footer'

const CheckOut = () => {
  return (
    <div className="flex flex-col h-full bg-green-500">
      <div className=" flex py-10 my-10 justify-center h-full max-sm:flex-col items-center">
        <FormCheckout />
        <CheckOutDetails />
      </div>
      <Footer />
    </div>
  )
}

export default CheckOut
