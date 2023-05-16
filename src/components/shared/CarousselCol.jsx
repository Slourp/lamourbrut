import React, { useState } from 'react'
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from 'react-icons/fa'
import { CarousselColData } from '../../data/CarousselData'

import './Caroussel.css'

const CarousselCol = ({ slides }) => {
  const [currentGroup, setCurrentGroup] = useState(0)
  const [currentImage, setCurrentImage] = useState(null)
  const totalGroups = Math.ceil(slides.length / 3)

  const nextGroup = () => {
    setCurrentGroup(
      currentGroup === totalGroups - 1
        ? currentGroup
        : currentGroup + 1
    )
  }

  const prevGroup = () => {
    setCurrentGroup(currentGroup === 0 ? 0 : currentGroup - 1)
  }

  const handleImageClick = (index) => {
    setCurrentImage(index)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const startIndex = currentGroup * 3
  const endIndex = startIndex + 3
  const currentSlides = slides.slice(startIndex, endIndex)

  return (
    <section className="caroussel-slider">
      {currentImage !== null && (
        <div className="fullscreen-image">
          <button onClick={() => setCurrentImage(null)}>Close</button>
          <img
            src={slides[currentImage].image}
            alt="backstage image"
          />
        </div>
      )}
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevGroup}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextGroup}
      />
      {currentSlides.map((slide, index) => {
        return (
          <div
            className="slide"
            key={startIndex + index}
            onClick={() => handleImageClick(startIndex + index)}
          >
            <img
              src={slide.image}
              alt="backstage image"
              className="image-slider"
            />
          </div>
        )
      })}
    </section>
  )
}

export default CarousselCol
