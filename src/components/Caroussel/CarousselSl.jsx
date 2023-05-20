import React, { useState } from 'react'
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
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

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const isMobile = window.innerWidth <= 768
  const slideToShow = isMobile ? 1 : 3

  return (
    <div className="max-w-[1400px] h-[520px] w-full m-auto py-16 px-4 relative group">
      <div
        className={`w-full h-[320px] rounded-2xl bg-center bg-cover duration-500 ${
          isMobile ? 'flex flex-col' : 'flex flex-row'
        } gap-4`}
      >
        {slides
          .slice(currentIndex, currentIndex + slideToShow)
          .map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={{ backgroundImage: `url(${slide.url})` }}
              className="flex-1 rounded-2xl bg-center bg-cover"
            />
          ))}
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex >= currentIndex &&
              slideIndex <= currentIndex + (slideToShow - 1)
                ? 'text-red-500'
                : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}
export default CarousselSl
