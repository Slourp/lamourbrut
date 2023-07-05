import React, { useState } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCreditCard } from 'react-icons/fa'
import { MdOutlinePreview } from 'react-icons/md'

const FormCheckout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: '',
    apartmentNumber: '',
    additionalInfo: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  const [activeIcon, setActiveIcon] = useState('person')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleIconClick = (icon) => {
    setActiveIcon(icon)
  }

  return (
    <div className="w-[55%] max-sm:w-full max-xs:w-full bg-white flex flex-col h-screen">
      <div>
        <p className="text-black font-bold text-xl text-start p-9">
          CHECKOUT
        </p>
      </div>
      <div className="pt-[10px] h-full">
        <form onSubmit={handleSubmit} className="px-8 h-[100%]">
          <div className="">
            <div className="flex justify-start gap-[100px] mt-5">
              <div className="flex flex-col items-center cursor-pointer">
                <BsFillPersonFill
                  size={30}
                  onClick={() => handleIconClick('person')}
                  className={
                    activeIcon === 'person' ? 'text-lbblue' : ''
                  }
                />
                <p className="text-center mt-1">Who ?</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <TbTruckDelivery
                  size={30}
                  onClick={() => handleIconClick('delivery')}
                  className={
                    activeIcon === 'delivery' ? 'text-lbblue' : ''
                  }
                />
                <p className="text-center  mt-1">Where ?</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <MdOutlinePreview
                  size={30}
                  onClick={() => handleIconClick('preview')}
                  className={
                    activeIcon === 'preview' ? 'text-lbblue' : ''
                  }
                />
                <p className="text-center mt-1">Review</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaCreditCard
                  size={30}
                  onClick={() => handleIconClick('payment')}
                  className={
                    activeIcon === 'payment' ? 'text-lbblue' : ''
                  }
                />
                <p className="text-center mt-1">Pay</p>
              </div>
            </div>
            <div className="border border-solid border-black w-[90%]" />
          </div>

          {activeIcon === 'person' && (
            <>
              <p className="py-8 text-xl text-gray-400 font-arial-black">
                1. PERSONAL DETAILS
              </p>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="FIRST NAME  *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="LAST NAME  *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="EMAIL   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="PHONE"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="ADDRESS   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="POSTAL CODE   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>
            </>
          )}

          {activeIcon === 'delivery' && (
            <>
              <p className="py-8 text-xl text-gray-400 font-arial-black">
                2. DELIVERY DETAILS
              </p>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="ADDRESS   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="POSTAL CODE   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="COUNTRY   *"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="apartmentNumber"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleChange}
                    placeholder="APARTMENT NUMBER"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>
            </>
          )}

          {activeIcon === 'preview' && (
            <>
              <p className="py-8 text-xl text-gray-400 font-arial-black">
                3. PREVIEW
              </p>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman">
                <div>
                  <p className="font-bold">First Name:</p>
                  <p>{formData.firstName}</p>
                </div>

                <div>
                  <p className="font-bold">Last Name:</p>
                  <p>{formData.lastName}</p>
                </div>

                <div>
                  <p className="font-bold">Email:</p>
                  <p>{formData.email}</p>
                </div>

                <div>
                  <p className="font-bold">Phone:</p>
                  <p>{formData.phone}</p>
                </div>

                <div>
                  <p className="font-bold">Address:</p>
                  <p>{formData.address}</p>
                </div>

                <div>
                  <p className="font-bold">Postal Code:</p>
                  <p>{formData.postalCode}</p>
                </div>

                <div>
                  <p className="font-bold">Country:</p>
                  <p>{formData.country}</p>
                </div>

                <div>
                  <p className="font-bold">Apartment Number:</p>
                  <p>{formData.apartmentNumber}</p>
                </div>
              </div>
            </>
          )}

          {activeIcon === 'payment' && (
            <>
              <p className="py-8 text-xl text-gray-400 font-arial-black">
                4. PAYMENT
              </p>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="CARD NUMBER"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>

                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    required
                    placeholder="EXPIRATION DATE"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 py-5 font-times-new-roman sm:flex-row">
                <div className="mb-4 sm:w-1/2">
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="CVV"
                    className="w-full px-4 py-2 border-b-2 border-gray-400 focus:outline-none placeholder-black"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex justify-start">
            <button
              type="submit"
              className="w-[100px] h-[40px] bg-black text-white text-[12px] font-bold rounded-lg shadow-md hover:bg-opacity-80"
            >
              {activeIcon === 'payment' ? 'PLACE ORDER' : 'NEXT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormCheckout
