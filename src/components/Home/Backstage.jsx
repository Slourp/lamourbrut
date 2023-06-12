import React from 'react'
import CarousselBackstage from '../Caroussel/CarousselBackstage'

const Backstage = () => {
  return (
    <section className="bg-black p-2">
      <div className="container mx-auto m-8">
        <h2 className="text-white text-5xl md:text-6xl lg:text-5xl xl:text-[90px] 2xl:text-7xl font-arial-black max-xs:font-extrabold  max-sm:mb-2">
          Backstage
        </h2>

        <CarousselBackstage />
        <p className="text-white mt-6 font-arial-black max-sm:text-center">
          BEHIND THE SCENE WITH L'AMOUR BRUT'S FAMILY
        </p>
        <p className="text-white text-justify mt-4 md:mt-8 text-lg md:text-[25px] font-times-new-roman">
          We like to think that working with our friends and entourage
          allows us to go further together. We met our photographers
          in school and our models are our friends. Feel free to check
          out the ABOUT US page to discover them.
        </p>
      </div>
    </section>
  )
}

export default Backstage
