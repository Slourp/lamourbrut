import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image1 from '../../assets/home/photocontact.jpg';

const tmpComponent = (
  <section className="flex bg-black relative">
    <div className='w-1/2 p-20 mt-[30vh]'>
      <h2 className='text-white '>
        Contact
      </h2>

    </div>
    <div className='flex-1'>
      <div className='flex'>

        <div>
          <img
            className='h-screen object-cover'
            src={Image1} alt="Left Image" />
        </div>
      </div>
    </div>
  </section>
)
const ContactUs = () => {
  return (
    <section className="flex overflow-hidden h-screen bg-black">
      <div className='flex container mx-auto'>

        <div className="w-[60%] flex">
          <img
            src={Image1}
            alt="Hero"
            className="flex-1  object-cover h-screen"
          />

        </div>
        <div className="text-white w-[55%] p-12 flex flex-col justify-center items-baseline  ">
          <h2 className='text-[88px]'>
            Contact
          </h2>
          <p className='max-w-[800px] text-[22px] '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis,
          </p>
          <button onClick={() =>
            window.location.href = '/story'
          } className='mt-24 flex items-center text-[22px] font-extrabold border-[6px] border-white uppercase p-1 px-5'>
            Contact us
            <HiArrowRight className='ml-4' />
          </button>
        </div>
      </div>
    </section >
  );
};

export default ContactUs;
