import React from 'react';
import { FaInstagramSquare, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="p-64 bg-black  text-white">
      <h3 className='text-center mb-4'>Follow Us</h3>
      <div className="flex justify-center gap-8 mt-9">
        <FaInstagramSquare className='text-[50px]' />
        <FaTwitter className=' text-[50px]' />
        <FaFacebook className=' text-[50px]' />
      </div>
      <div className='text-center mt-14'>
        <p className=''>L'Amour Brut</p>
        <p className=''>75010 Paris, France</p>
        <p className=''>+32 2 123 45 67</p>
      </div>

    </section>
  );
};

export default Footer;
