import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="p-8 md:p-8 lg:p-16 bg-black text-white">
      <h3 className="text-center mb-4 text-lg md:text-xl xl:text-[40px] pt-[60px]">
        Follow Us
      </h3>
      <div className="flex justify-center gap-8 mt-6 md:mt-9">
        <a
          href="https://www.instagram.com/lamour_brut/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="text-2xl md:text-4xl" />
        </a>
      </div>
      <div className="text-center mt-10 md:mt-14">
        <p className="text-sm md:text-base">L'Amour Brut</p>
        <p className="text-sm md:text-base">75001 Paris, France</p>
      </div>
    </section>
  )
}

export default Footer
