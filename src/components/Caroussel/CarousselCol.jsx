import React, { useState } from 'react'
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

import { RxDotFilled } from 'react-icons/rx'

import Col1 from '../../assets/about/speos/coc-karelvaldmann/coc1.jpg'
import Col2 from '../../assets/about/speos/coc-karelvaldmann/coc2.jpg'
import Col3 from '../../assets/about/speos/coc-karelvaldmann/coc3.jpg'
import Col4 from '../../assets/about/speos/coc-karelvaldmann/coc4.jpg'
import Col5 from '../../assets/about/speos/coc-karelvaldmann/coc5.jpg'
import Col6 from '../../assets/about/speos/coc-karelvaldmann/coc6.jpg'
import Col7 from '../../assets/about/speos/coc-karelvaldmann/coc7.jpg'
import Col8 from '../../assets/about/speos/coc-karelvaldmann/coc8.jpg'

const CarousselCol = () => {
  const slides = [
    {
      url: Col1,
    },
    {
      url: Col8,
    },
    {
      url: Col6,
    },
    {
      url: Col2,
    },
    {
      url: Col3,
    },
    {
      url: Col4,
    },
    {
      url: Col5,
    },
    {
      url: Col7,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  const isMobile = window.innerWidth <= 768
  const slideToShow = isMobile ? 1 : 3

  const prevSlide = () => {
    const newIndex = currentIndex - 1
    const visibleIndex =
      newIndex < 0 ? slides.length - slideToShow : newIndex
    setCurrentIndex(visibleIndex)
  }

  const nextSlide = () => {
    const newIndex = currentIndex + 1
    const visibleIndex =
      newIndex >= slides.length - slideToShow + 1 ? 0 : newIndex
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
    <div className="max-w-[1400px] h-[420px] w-full m-auto py-5 px-4 relative group">
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
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
            className="fixed right-0 mr-4 p-2 bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={() => slideFullscreen(1)}
            role="button"
            tabIndex={0}
          >
            <BsChevronCompactRight size={30} />
          </div>
          <div
            className="fixed left-0 ml-4 p-2 bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={() => slideFullscreen(-1)} // Glissement vers la gauche
            role="button"
            tabIndex={0}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          <div
            className="fixed top-10 left-0 mt-4 ml-4 p-2 max-xs:mt-[70px] bg-white rounded-full cursor-pointer"
            onKeyDown={() => {}}
            onClick={closeFullscreen}
            role="button"
            tabIndex={0}
          >
            <ImCross size={30} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CarousselCol
