import React, { useState, useEffect } from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible)
    }, 500) // Réglez la durée du clignotement en millisecondes

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <section className="p-8 md:p-8 lg:p-16 bg-black text-white">
      <motion.h3
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { duration: 0.5, yoyo: Infinity },
          },
        }}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-4 text-lg md:text-xl xl:text-[40px] pt-[60px] text-lbpink"
      >
        Follow Us
      </motion.h3>
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
