import React from 'react';
import HeaderHome from '../../assets/home/hero.jpg';

const Hero = () => {
  return (
    <section className="flex overflow-hidden h-[68vh] container mx-auto">
      <div className="w-[50%] absolute z-10 ">
        <h1 style={{ letterSpacing: '-4px' }} className=" z-10 uppercase flex-wrap  mt-[25vh] ">
          <span style={{

          }} className=" uppercase font-arial-black mr-[14px] text-[80px] lg:text-[110px] ">L'Amour</span>
          <span className="  font-times-new-roman text-[80px] lg:text-[120px] ml-4" style={{

          }}>Brut</span>
        </h1>
      </div>
      <div className="w-[50%] z-1 absolute right-0 z-[-1]">
        <img src={HeaderHome} alt="Hero" className="flex-1 h-[700px] object-cover" />
        <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-md z-[1]" />
      </div>
    </section>
  );
};

export default Hero;
