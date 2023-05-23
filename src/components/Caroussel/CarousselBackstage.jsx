import React, { useState } from 'react'
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import Bg1 from '../../assets/home/backstage/bs1.jpg'
import Bg2 from '../../assets/home/backstage/bs2.jpg'
import Bg3 from '../../assets/home/backstage/bs3.jpg'
import Bg4 from '../../assets/home/backstage/bs4.jpg'
import Bg5 from '../../assets/home/backstage/bs5.jpg'
import Bg6 from '../../assets/home/backstage/bs6.jpg'
import Bg7 from '../../assets/home/backstage/bs7.jpg'
import Bg8 from '../../assets/home/backstage/bs8.jpg'
import Bg9 from '../../assets/home/backstage/bs9.jpg'
import Bg11 from '../../assets/home/backstage/bs11.jpg'

import './Caroussel.css'

const CarousselBackstage = () => {
  const slides = [
    {
      url: Bg1,
    },
    {
      url: Bg6,
    },
    {
      url: Bg9,
    },
    {
      url: Bg2,
    },
    {
      url: Bg3,
    },
    {
      url: Bg4,
    },
    {
      url: Bg5,
    },
    {
      url: Bg7,
    },
    {
      url: Bg8,
    },
    {
      url: Bg11,
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
    <div className="max-w-[1400px] h-[520px] w-full m-auto py-12 px-4 relative group">
      <div
        className={`w-full h-[420px] rounded-2xl bg-center bg-cover duration-500 ${
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
                height: '420px',
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

export default CarousselBackstage
