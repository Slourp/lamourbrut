import React, { useState, useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Image2 from '../../assets/home/amourbrut002.jpg'
import Image1 from '../../assets/home/img20230328_203103302.png'

import './OurStory.css'

const OurStory = () => {
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
    <section className="flex flex-col text-center md:flex-row sm:flex-row overflow-hidden h-full md:h-screen">
      <div className="w-full md:w-[55%] sm:w-[50%] flex flex-wrap">
        <img
          src={Image1}
          alt="Hero"
          className="w-full md:w-1/2 object-cover h-[50vh]  sm:h-[40vh]  md:h-screen"
        />
        <img
          src={Image2}
          alt="Hero"
          className="w-full md:w-1/2 object-cover h-[50vh] sm:h-[40vh] md:h-screen"
        />
      </div>
      <div className="w-full md:w-[45%] sm:w-[50%] px-4 md:p-12 sm:p-10 sm:mt-[200px] flex flex-col justify-center items-baseline mt-3">
        <h2 className="text-5xl md:text-6xl lg:text-5xl xl:text-[80px] 2xl:text-7xl font-arial-black max-xs:font-extrabold">
          Our Story
        </h2>
        <p className=" text-justify mt-4 md:mt-8 max-w-[550px] text-lg md:text-[25px] font-times-new-roman">
          L’AMOUR BRUT tells the story of the opposition and the
          coming together of two visions. On the one hand, the love
          that wants to be light and sensual, and on the other hand, a
          raw exterior that is imperfect and refractory.
        </p>
        <motion.button
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
          onClick={() => (window.location.href = '/story')}
          className="bg-lbpink my-8 md:my-12 flex items-center text-[22px] font-extrabold border-[6px] border-black uppercase p-1 px-5"
        >
          Read more
          <HiArrowRight className="ml-4" />
        </motion.button>
      </div>
    </section>
  )
}

export default OurStory
