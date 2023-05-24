import React from 'react'
import { motion } from 'framer-motion'
import HeaderHome from '../../assets/home/hero.jpg'
import { fadeIn } from '../../../variants'

const Hero = () => {
  return (
    <section className="flex overflow-hidden h-[68vh] container mx-auto">
      <div className="w-[50%] absolute">
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          style={{ letterSpacing: '-4px', marginBottom: 0 }}
          className="uppercase flex-wrap mt-[25vh] "
        >
          <span
            style={{}}
            className="title uppercase font-arial-black mr-[14px] text-[60px] lg:text-[110px] max-xs:text-[45px]"
          >
            L'Amour
          </span>
          <span
            className="title font-times-new-roman text-[60px] lg:text-[120px] ml-4 max-xs:text-[45px]"
            style={{}}
          >
            Brut
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          style={{ fontFamily: 'Arial Black', marginTop: 0 }}
          className="text-center text-[15px] max-xs:text-[10px] lg:text-[30px]"
        >
          FALL IN LOVE WITH CLOTHES
        </motion.p>
      </div>
      <div className="w-[50%] z-1 absolute right-0 z-[-1]">
        <img
          src={HeaderHome}
          alt="Hero"
          className="flex-1 h-[700px] object-cover sm:h-screen"
        />
        <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-md z-[1]" />
      </div>
    </section>
  )
}

export default Hero
