import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsCart } from 'react-icons/bs'
import Logo from '../assets/lamourbrutlogo.png'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollPos, setLastScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      if (currentScrollPos <= 0) {
        setShowNavbar(true)
      } else if (currentScrollPos < lastScrollPos) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
      setLastScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPos])

  return (
    <nav
      className="navbar fixed z-100 flex justify-between top-0 w-full bg-white p-2 px-8 border-b-2 border-black navbar-transition"
      style={{
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="flex gap-2">
        {/*  <RxHamburgerMenu
          size={32}
          className="inline-block mr-6 cursor-pointer hover:text-blue-800"
        /> */}
      </div>

      {/*   <div
        className="absolute left-[50%] -translate-x-[50%] cursor-pointer"
        onClick={() => (window.location.href = '/')}
      >
        <img src={Logo} alt="L'Amour Brut" className="h-8 mx-auto" />
      </div> */}
      <div
        className="absolute left-4 md:left-[50%] md:-translate-x-[50%] cursor-pointer"
        onClick={() => (window.location.href = '/')}
      >
        <img
          src={Logo}
          alt="L'Amour Brut"
          className="h-8 mx-auto md:mx-0"
        />
      </div>

      <div className="flex gap-4">
        <button
          className="border-[3px] border-black font-extrabold px-2 z-50"
          onClick={() => (window.location.href = '/shop')}
        >
          SHOP
        </button>
        <button
          className="border-[3px] border-black font-extrabold px-2"
          onClick={() => (window.location.href = '/about-us')}
        >
          ABOUT
        </button>
        {/* <Link to="/about-us" className="hover:text-blue-800">
          <BsCart size={32} className="cursor-pointer hover:text-blue-800" />
        </Link> */}
      </div>
    </nav>
  )
}

export default Navbar
