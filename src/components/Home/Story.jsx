import React from 'react'
import Image2 from '../../assets/home/amourbrut002.jpg'
import Image1 from '../../assets/home/img20230328_203103302.png'

const OurStory = () => {
  return (
    <section className="flex overflow-hidden h-screen">
      <div className="w-[50%] flex">
        <img
          src={Image1}
          alt="Hero"
          className="flex-1 max-w-[50%] object-cover h-screen"
        />
        <img
          src={Image2}
          alt="Hero"
          className="flex-1 max-w-[50%] object-cover h-screen"
        />
      </div>
      <div className="w-[50%] p-12 flex flex-col justify-center">
        <h2 className="text-black text-[80px] opacity-[0.8]">
          Our Story
        </h2>
        <p className="text-[16px] lg:text-[26px] max-w-[495px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veritatis, distinctio amet aliquam rerum atque commodi,
          velit culpa inventore eligendi nemo iste facere
          exercitationem accusantium nam quia at quod natus iure!
        </p>
        <button
          className="border-[3px] border-black font-extrabold px-2 max-w-[200px] p-2 text-xl mt-7"
          onClick={() => (window.location.href = '/ourstory ')}
        >
          MORE
        </button>
      </div>
    </section>
  )
}

export default OurStory
