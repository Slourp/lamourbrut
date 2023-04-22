import React from 'react'
import Image2 from '../../assets/home/amourbrut002.jpg'
import Image1 from '../../assets/home/img20230328_203103302.png'
import { HiArrowRight } from 'react-icons/hi';

const OurStory = () => {
  return (
    <section className="flex overflow-hidden h-screen">
      <div className="w-[55%] flex">
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
      <div className="w-[45%] p-12 flex flex-col justify-center items-baseline">
        <h2>
          Our Story
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veritatis, distinctio amet aliquam rerum atque commodi,
          velit culpa inventore eligendi nemo iste facere
          exercitationem accusantium nam quia at quod natus iure!
        </p>
        <button onClick={() =>
          window.location.href = '/story'
        } className='my-12 flex items-center text-[22px] font-extrabold border-[6px] border-black uppercase p-1 px-5'>
          Read more
          <HiArrowRight className='ml-4' />
        </button>
      </div>
    </section >
  )
}

export default OurStory
