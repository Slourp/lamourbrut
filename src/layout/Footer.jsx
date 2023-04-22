import React from 'react';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-black p-20">
      <h2 className='text-white text-[40px] text-center opacity-[0.8] mb-4'>Follow Us</h2>

      <div className="flex justify-center gap-8 mt-9">
        <FaInstagramSquare className='bg-white text-4xl' />
        <FaTwitter className='text-white text-4xl' />
      </div>
    </section>
  );
};

export default Footer;
