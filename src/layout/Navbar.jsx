import React, { useState, useEffect } from 'react'
import { BsFillBasketFill } from 'react-icons/bs'
import Logo from '../assets/lamourbrutlogo.png'
import Sidebar from './Sidebar'
import Basket from '../shopify/components/Basket'

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)

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

  const handleRedirect = (path) => {
    window.location.href = path
  }

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen)
  }

  const closeBasket = () => {
    setIsBasketOpen(false)
  }

  return (
    <>
      {isBasketOpen && <Basket onClose={closeBasket} />}

      <nav
        className="navbar fixed z-100 flex justify-between items-center top-0 w-full bg-white p-2 px-4 border-b-2 border-black navbar-transition"
        style={{
          transform: showNavbar
            ? 'translateY(0)'
            : 'translateY(-100%)',
          top: 0,
          zIndex: 9999,
        }}
      >
        <div className="flex gap-2">{isMobile && <Sidebar />}</div>

        <div
          className="absolute right-4 md:right-[50%] md:translate-x-[50%] cursor-pointer sm:translate-x-[-380%]"
          onClick={() => handleRedirect('/')}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleRedirect('/')
            }
          }}
          role="button"
          tabIndex={0}
        >
          <img
            src={Logo}
            alt="L'Amour Brut"
            className="h-8 mx-auto"
          />
        </div>

        {!isMobile && (
          <div className="flex gap-4">
            <button
              className="border-[3px] border-black font-extrabold px-2 z-50"
              onClick={() => handleRedirect('/shop')}
              type="button"
            >
              SHOP
            </button>

            <button
              className="border-[3px] border-black font-extrabold px-2"
              onClick={() => handleRedirect('/about-us')}
              type="button"
            >
              ABOUT US
            </button>

            <button
              className="border-[3px] border-black font-extrabold relative"
              onClick={toggleBasket}
              type="button"
            >
              <BsFillBasketFill size={20} />
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
