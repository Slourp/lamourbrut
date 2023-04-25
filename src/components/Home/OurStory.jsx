import React from 'react';
import Image2 from '../../assets/home/amourbrut002.jpg';
import Image1 from '../../assets/home/img20230328_203103302.png';
import { HiArrowRight } from 'react-icons/hi';

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
        <h2 className=" text-2xl md:text-4xl">
          Our Story
        </h2>
        <p className="mt-4 md:mt-8 max-w-[550px] text-lg md:text-[22px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veritatis, distinctio amet aliquam rerum atque commodi,
          velit culpa inventore eligendi nemo iste facere
          exercitationem accusantium nam quia at quod natus iure!
        </p>
        <button
          onClick={() => window.location.href = '/story'}
          className="my-8 md:my-12 flex items-center text-[22px] font-extrabold border-[6px] border-black uppercase p-1 px-5"
        >
          Read more
          <HiArrowRight className="ml-4" />
        </button>
      </div>
    </section>
  );
};

export default OurStory;
