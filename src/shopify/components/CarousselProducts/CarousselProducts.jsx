import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Client from 'shopify-buy'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarousselProducts = ({ images }) => {
  const [isCarouselOpen, setCarouselOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showIndicator, setShowIndicator] = useState(false)
  const [totalSlides, setTotalSlides] = useState(images.length)
  const carouselRef = React.useRef(null)

  const openCarousel = (index) => {
    setCurrentSlide(index);
    setCarouselOpen(true);
    setShowIndicator(true);
    setTimeout(() => {
      carouselRef.current.focus();
    }, 0);
  };

  const closeCarousel = () => {
    setCarouselOpen(false)
    setShowIndicator(false)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    initialSlide: currentSlide,
    afterChange: (current) => setCurrentSlide(current),
    customPaging: (i) => (
      <div
        className={`slick-dot ${currentSlide === i ? 'slick-active' : ''
          }`}
        onClick={() => setCurrentSlide(i)}
      />
    ),
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        carouselRef.current.slickPrev()
      } else if (event.key === 'ArrowDown') {
        carouselRef.current.slickNext()
      }
    }

    if (isCarouselOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCarouselOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target)
      ) {
        closeCarousel()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col items-start">
      <div className={`mt-4 ${isCarouselOpen ? 'hidden' : ''}`}>
        {images.map((image, index) => (
          <img
            key={uuidv4()}
            src={image.src}
            alt={`Image ${index}`}
            onClick={() => openCarousel(index)}
            className="cursor-pointer"
          />
        ))}
      </div>
      {isCarouselOpen && (
        <div className="mt-4 relative max-w-[100%]" ref={carouselRef}>
          {showIndicator && (
            <div className="carousel-indicator fixed top-1/2 left-2 transform -translate-y-1/2 z-50">
              <div className="flex flex-col items-center">
                {images.map((_, index) => (
                  <div
                    key={uuidv4()}
                    className={`w-4 h-4 rounded-full mb-2 ${currentSlide === index
                        ? 'bg-yellow-500'
                        : 'bg-white'
                      }`}
                  />
                ))}
              </div>
            </div>
          )}
          <Slider {...settings} className="max-h-full">
            {images.map((image, index) => (
              <div
                key={uuidv4()}
                className="flex items-start justify-center"
              >
                <img
                  className="w-[1800px] h-auto"
                  src={image.src}
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  )
}

export default CarousselProducts
