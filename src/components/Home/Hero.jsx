import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import HeaderHome from '../../assets/home/hero.jpg'

const Hero = () => {
  return (
    <section className="flex overflow-hidden h-[68vh] container mx-auto">
      <div className="w-[50%] absolute z-10">
        <motion.h1
          variants={fadeIn('down', 0.03)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          style={{ letterSpacing: '-4px', marginBottom: 0 }}
          className="z-10 uppercase flex-wrap mt-[25vh] "
        >
          <span
            style={{}}
            className="uppercase font-arial-black mr-[14px] text-[60px] lg:text-[110px] max-xs:text-[45px]"
          >
            L'Amour
          </span>
          <span
            className="font-times-new-roman text-[60px] lg:text-[120px] ml-4 max-xs:text-[45px]"
            style={{}}
          >
            Brut
          </span>
        </motion.h1>
        <motion.p
         variants={fadeIn('up', 0.8)}
         initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}
          style={{ fontFamily: 'Arial Black', marginTop: 0 }}
          className="text-center text-[15px] max-xs:text-[12px] lg:text-[30px]"
        >
          FALL IN LOVE CLOTHES
        </motion.p>
      </div>
      <div className="w-[50%] z-1 absolute right-0 z-[-1]">
        <img
          src={HeaderHome}
          alt="Hero"
          className="flex-1 h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-md z-[1]" />
      </div>
    </section>
  )
}

export default Hero
