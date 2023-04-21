import React from 'react';
import HeaderHome from '../../assets/home/hero.jpg';

const Hero = () => {
  return (
    <section className="flex overflow-hidden h-[68vh]">
      <div className="w-[50%] p-12">
        <h1 style={{ letterSpacing: '-4px' }} className="uppercase flex-wrap  tracking-tight mt-[12vh] ">
          <span className=" uppercase font-arial-black mr-[14px] text-[28px]  lg:text-[58px] ">L'Amour</span>
          <span className="font-times-new-roman text-[28px] lg:text-[60px]">Brut</span>
        </h1>
        <p className='text-[16px] lg:text-[26px] max-w-[495px]'>
          <strong>lorem</strong> string sit amet, consectetur  sit amet, consectetur Sed euismod  consectetur Sed euismod.
        </p>
      </div>
      <div className="w-[50%]">
        <img src={HeaderHome} alt="Hero" className="flex-1 h-[700px] max-w-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
