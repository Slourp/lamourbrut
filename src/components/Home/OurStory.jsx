import React from 'react'
import Image2 from '../../assets/home/amourbrut002.jpg'
import Image1 from '../../assets/home/img20230328_203103302.png'
import { HiArrowRight } from 'react-icons/hi'

const OurStory = () => {
  return (
    <section className="flex flex-col text-center md:flex-row overflow-hidden h-full md:h-screen">
      <div className="w-full md:w-[55%] flex flex-wrap">
        <img
          src={Image1}
          alt="Hero"
          className="w-full md:w-1/2 object-cover h-[50vh] md:h-screen"
        />
        <img
          src={Image2}
          alt="Hero"
          className="w-full md:w-1/2 object-cover h-[50vh] md:h-screen"
        />
      </div>
      <div className="w-full md:w-[45%] px-4 md:p-12 flex flex-col justify-center items-baseline">
        {/*  <h2 className="text-2xl md:text-4xl">
          Our Story
        </h2> */}
        <h2 className="text-5xl md:text-6xl lg:text-5xl xl:text-[90px] 2xl:text-7xl">
          Our Story
        </h2>
        <p className=" text-justify mt-4 md:mt-8 max-w-[550px] text-lg md:text-[22px]">
          L’AMOUR BRUT tells the story of the opposition and the
          coming together of two visions. On the one hand, the love
          that wants to be light and sensual, and on the other hand, a
          raw exterior that is imperfect and refractory.
        </p>
        <button
          onClick={() => (window.location.href = '/story')}
          className="my-8 md:my-12 flex items-center text-[22px] font-extrabold border-[6px] border-black uppercase p-1 px-5"
        >
          Read more
          <HiArrowRight className="ml-4" />
        </button>
      </div>
    </section>
  )
}

export default OurStory
