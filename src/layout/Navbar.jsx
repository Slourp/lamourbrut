// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/lamourbrutlogo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="fixed  z-10 flex justify-between top-0 w-full bg-white p-4 px-8 border-b-2 border-black
    ">
      <div className=''>
        <RxHamburgerMenu size={32} className="inline-block mr-6 cursor-pointer hover:text-blue-800" />
        <button className='border-[3px] border-black font-extrabold px-2' onClick={() =>
          window.location.href = '/shop'
        }>
          SHOP
        </button>
      </div>
      <div className='absolute left-[50%] -translate-x-[50%]  cursor-pointer ' onClick={() =>
        window.location.href = '/'
      }>
        <img src={Logo} alt="L'Amour Brut" className="h-8 mx-auto" />
      </div>
      <Link to="/about-us" className=" hover:text-blue-800">
        <BsCart size={32} className="cursor-pointer hover:text-blue-800" />
      </Link>
    </nav>
  );
};

export default Navbar;
