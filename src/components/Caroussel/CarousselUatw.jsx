import React, { useState } from 'react'
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import Uatw1 from '../../assets/about/speos/uatw-raphaelgarsault/uatw1.jpg'
import Uatw2 from '../../assets/about/speos/uatw-raphaelgarsault/uatw2.jpg'
import Uatw3 from '../../assets/about/speos/uatw-raphaelgarsault/uatw3.jpg'
import Uatw4 from '../../assets/about/speos/uatw-raphaelgarsault/uatw4.jpg'
import Uatw5 from '../../assets/about/speos/uatw-raphaelgarsault/uatw5.jpg'
import Uatw6 from '../../assets/about/speos/uatw-raphaelgarsault/uatw6.jpg'

const CarousselUatw = () => {
  const slides = [
    {
      url: Uatw1,
    },
    {
      url: Uatw2,
    },
    {
      url: Uatw3,
    },
    {
      url: Uatw4,
    },
    {
      url: Uatw5,
    },
    {
      url: Uatw6,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

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
          .map((slide) => (
            <div
              key={slide.url}
              style={{
                backgroundImage: `url(${slide.url})`,
                width: isMobile ? '100%' : '33%',
                height: '320px',
              }}
              className="rounded-2xl bg-center bg-cover"
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
    </div>
  )
}
export default CarousselUatw
