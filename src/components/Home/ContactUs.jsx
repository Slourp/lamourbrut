import React from 'react';

import Image1 from '../../assets/home/photocontact.jpg';

const ContactUs = () => {
  return (
    <section className="flex bg-black relative">
      <h2 className='text-white absolute top-[18vh] left-12 text-[80px] opacity-[0.8]'>
        Contact
      </h2>
      <div className='w-1/2 p-20 mt-[30vh]'>
        <h3 className='text-white underline cursor-pointer'>e-mail</h3>
        <h3 className='text-white underline cursor-pointer'>instagram</h3>
        <h3 className='text-white underline cursor-pointer'>shop</h3>
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
  );
};

export default ContactUs;
