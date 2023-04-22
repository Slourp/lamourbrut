import React from 'react';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-black p-20">
      <h3 className='text-white text-center mb-4'>Follow Us</h3>

      <div className="flex justify-center gap-8 mt-9">
        <FaInstagramSquare className='bg-white text-4xl' />
        <FaTwitter className='text-white text-4xl' />
      </div>
    </section>
  );
};

export default Footer;
