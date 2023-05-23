import React, { useState } from 'react'
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactDown,
} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import Sl1 from '../../assets/about/speos/sl-amirasnaerosjabali/sl1.jpg'
import Sl2 from '../../assets/about/speos/sl-amirasnaerosjabali/sl2.jpg'
import Sl3 from '../../assets/about/speos/sl-amirasnaerosjabali/sl3.jpg'
import Sl4 from '../../assets/about/speos/sl-amirasnaerosjabali/sl4.jpg'
import Sl5 from '../../assets/about/speos/sl-amirasnaerosjabali/sl5.jpg'
import Sl6 from '../../assets/about/speos/sl-amirasnaerosjabali/sl6.jpg'

const CarousselSl = () => {
  const slides = [
    {
      url: Sl1,
    },
    {
      url: Sl2,
    },
    {
      url: Sl3,
    },
    {
      url: Sl4,
    },
    {
      url: Sl5,
    },
    {
      url: Sl6,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  const isMobile = window.innerWidth <= 768
  const slideToShow = isMobile ? 1 : 3

  const prevSlide = () => {
    const newIndex =
      (currentIndex - 1 + slides.length) % slides.length
    const visibleIndex = (newIndex + slideToShow - 1) % slides.length
    setCurrentIndex(visibleIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length
    const visibleIndex = newIndex
    setCurrentIndex(visibleIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
    setFullscreenIndex(slideIndex)
  }

  const openFullscreen = (index) => {
    setFullscreenIndex(index)
    document.body.style.overflow = 'hidden' // Désactive le défilement de la page
  }

  const closeFullscreen = () => {
    setFullscreenIndex(null)
    document.body.style.overflow = 'auto' // Réactive le défilement de la page
  }

  const slideFullscreen = (direction) => {
    const newIndex =
      (fullscreenIndex + direction + slides.length) % slides.length
    setFullscreenIndex(newIndex)
  }

  return (
    <div className="max-w-[1400px] h-[420px] w-full m-auto py-12 px-4 relative group">
      <div
        className={`w-full h-[330px] rounded-2xl bg-center bg-cover duration-500 ${
          isMobile ? 'flex flex-col' : 'flex flex-row'
        } gap-4`}
      >
        {slides
          .slice(currentIndex, currentIndex + slideToShow)
          .map((slide, index) => (
            <div
              key={slide.url}
              style={{
                backgroundImage: `url(${slide.url})`,
                width: isMobile ? '100%' : '33%',
                height: '320px',
              }}
              className="rounded-2xl bg-center bg-cover cursor-pointer"
              onClick={() => openFullscreen(currentIndex + index)}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </div>
          ))}
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          style={{ top: '45%' }}
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          style={{ top: '45%' }}
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <button
            type="button"
            key={(slideIndex, slide)}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex >= currentIndex &&
              slideIndex <= currentIndex + (slideToShow - 1)
                ? 'text-lbpink'
                : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </button>
        ))}
      </div>
      {fullscreenIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
          <img
            src={slides[fullscreenIndex].url}
            alt={`Fullscreen ${fullscreenIndex}`}
            className="max-h-screen max-w-full"
          />
          <div
            className="fixed top-0 right-0 mt-[100px] mr-4 p-2 bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={() => slideFullscreen(1)}
            role="button"
            tabIndex={0}
          >
            <BsChevronCompactRight size={30} />
          </div>
          <div
            className="fixed top-0 left-0 mt-[100px] ml-4 p-2 bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={() => slideFullscreen(-1)} // Glissement vers la gauche
            role="button"
            tabIndex={0}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            className="fixed bottom-0 right-0 mb-4 mr-4 p-2 bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={closeFullscreen}
            role="button"
            tabIndex={0}
          >
            <BsChevronCompactDown size={30} />
          </div>
        </div>
      )}
    </div>
  )
}
export default CarousselSl
