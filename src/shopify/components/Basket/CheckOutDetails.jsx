import React from 'react'
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaFileContract,
} from 'react-icons/fa'
import { SiAmericanexpress, SiSpringsecurity } from 'react-icons/si'
import { CiDeliveryTruck } from 'react-icons/ci'

const CheckOutDetails = () => {
  return (
    <div className="bg-gray-100 w-[30%] h-screen max-sm:w-full max-xs:w-full">
      <div className="mt-9">
        <div className="ml-10">
          <h2 className="text-xl text-gray-400">TOTALS</h2>
          <div>
            <p className="font-bold">Products: </p>
            <p className="font-bold">Subtotal: </p>
            <div className="my-10 border border-solid border-black w-[80%]" />
            <p className="font-bold">Total: </p>
          </div>
        </div>
      </div>

      {/* Mention Protection */}
      <div className="flex mt-10 gap-6 items-center justify-center">
        <SiSpringsecurity size={20} />
        <div>
          <div className="flex flex-col justify-start">
            <p className="text-[12px] font-bold">Protection</p>
            <p className="text-[10px] text-justify mt-2 max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
          <div className="flex justify-start gap-6 mt-3">
            <FaCcVisa size={25} />
            <FaCcMastercard size={25} />
            <SiAmericanexpress size={25} />
            <FaCcPaypal size={25} />
          </div>
        </div>
      </div>

      {/* Free Delivery */}
      <div className="flex mt-5 gap-6 items-center justify-center">
        <CiDeliveryTruck size={20} />
        <div>
          <div className="flex flex-col justify-start">
            <p className="text-[12px] font-bold">Delivery</p>
            <p className="text-[10px] text-justify mt-2 max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
        </div>
      </div>

      {/* Free Delivery */}
      <div className="flex mt-5 gap-6 items-center justify-center">
        <FaFileContract size={20} />
        <div>
          <div className="flex flex-col justify-start">
            <p className="text-[12px] font-bold">
              Changed your mind ?
            </p>
            <p className="text-[10px] text-justify mt-2 max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutDetails
