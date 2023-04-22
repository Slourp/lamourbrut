import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

import Image1 from '../../assets/home/photocontact.jpg';

const tmpComponent = (
  <section className="flex bg-black relative">
    <div className='w-1/2 p-20 mt-[30vh]'>
      <h2 className='text-white '>
        Contact
      </h2>
      <p className='text-white underline cursor-pointer'>e-mail</p>
      <p className='text-white underline cursor-pointer'>instagram</p>
      <p className='text-white underline cursor-pointer'>shop</p>
      <div className='mt-24'>
        <p className='text-white'>L'Amour Brut</p>
        <p className='text-white'>75010 Paris, France</p>
        <p className='text-white'>+32 2 123 45 67</p>
        <p className='text-yellow'>
          <a href="mailto:" className=' underline block text-yellow'>
            contact us
          </a>
          <a href="mailto:" className='text-yellow underline'>
            instagram
          </a>
        </p>
      </div>
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
      <div className="text-white w-[55%] p-12 flex flex-col justify-center items-baseline">
        <h2>
          Contact
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veritatis, distinctio amet aliquam rerum atque commodi,
          velit culpa inventore eligendi nemo iste facere
          exercitationem accusantium nam quia at quod natus iure!
        </p>
        <button onClick={() =>
          window.location.href = '/story'
        } className='my-12 flex items-center text-[22px] font-extrabold border-[6px] border-white uppercase p-1 px-5'>
          Contact us
          <HiArrowRight className='ml-4' />
        </button>
      </div>
      <div className="w-[60%] flex">
        <img
          src={Image1}
          alt="Hero"
          className="flex-1  object-cover h-screen"
        />

      </div>
    </section >
  );
};

export default ContactUs;
