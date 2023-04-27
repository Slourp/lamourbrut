import React from 'react'
import Image1 from '../../assets/home/amourbrut010.jpg'
import Image2 from '../../assets/home/amourbrut009.jpg'
import Image3 from '../../assets/home/amourbrut008.jpg'
import Image4 from '../../assets/home/amourbrut004.jpg'

const images = [Image1, Image2, Image3, Image4]

const Backstage = () => {
  return (
    <section className="bg-black p-2">
      <div className="container mx-auto m-8">
        <h2 
          style={{fontFamily: 'Arial Black'}}
          className="text-white text-5xl md:text-6xl lg:text-5xl xl:text-[90px] 2xl:text-7xl"
        >
          Backstage
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center col-12"
             style={{flexDirection: 'column'}}
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt=""
                className="h-full object-cover backstage-img w-full"
              />
            </div>
          ))}
        </div>
        <p
          style={{fontFamily: 'Arial Black'}} 
          className='text-white mt-6'
        >
          BEHIND THE SCENE WITH L'AMOUR BRUT'S FAMILY
        </p>
        <p
          style={{fontFamily:'times-new-roman'}}
          className="text-white text-justify mt-4 md:mt-8 text-lg md:text-[25px]"
        >
          We like to think that working with our friends and acquaintances allows us to
          go further together. We met our photographers in school and our models are our friends. 
          Feel free to check out the ABOUT US page to discover them.
        </p>
      </div>
    </section>
  )
}

export default Backstage
