import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsCart } from 'react-icons/bs'
import Logo from '../assets/lamourbrutlogo.png'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [lastScrollPos])

  return (
    <nav
      className="navbar fixed z-100 flex justify-between top-0 w-full bg-white p-2 px-8 border-b-2 border-black navbar-transition"
      style={{
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        top: 0,
        zIndex: 9999,
      }}
    >
      <div className="flex gap-2">{isMobile && <Sidebar />}</div>

      <div
        className={`absolute right-4 md:right-[50%] md:translate-x-[50%] cursor-pointer ${isMobile ? 'top-[50%] transform translate-y-[-50%]' : ''
          }`}
        onClick={() => (window.location.href = '/')}
      >
        <img
          src={Logo}
          alt="L'Amour Brut"
          className="h-8 mx-auto md:mx-0"
        />
      </div>

      {isMobile ? null : (
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
        </div>
      )}
    </nav>
  )
}

export default Navbar
