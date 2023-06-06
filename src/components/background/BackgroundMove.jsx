import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import {
  AiFillHeart,
  AiFillShopping,
  AiFillStar,
} from 'react-icons/ai'
import { GrRestroomWomen } from 'react-icons/gr'
import { GiAmpleDress } from 'react-icons/gi'
import { MdPartyMode } from 'react-icons/md'
import { TbMoodCrazyHappy } from 'react-icons/tb'
import './BackgroundMove.css'

const BackgroundMove = () => {
  const numHearts = 100 // Nombre de cœurs à afficher
  const icons = [
    FaHeart,
    AiFillHeart,
    AiFillShopping,
    AiFillStar,
    GrRestroomWomen,
    GiAmpleDress,
    MdPartyMode,
    TbMoodCrazyHappy,
  ]
  const colors = [
    '#000000',
    '#FF00FF',
    '#FF0000',
    '#FFFFFF',
    '#035F1D',
    '#E45C96',
    '#0000FF',
  ] // Liste des couleurs possibles
  const [hearts, setHearts] = useState([])
  const [backgroundColor, setBackgroundColor] = useState('#000000')

  useEffect(
    () => {
      const generateHearts = () => {
        const heartsArray = Array.from(
          { length: numHearts },
          (_, index) => {
            const randomMovement =
              Math.random() < 0.5 ? 'left-right' : 'top-bottom'
            const randomSpeed = Math.random() * 6 + 4
            const randomDelay = Math.random() * 5
            const initialTop = Math.random() * -window.innerHeight // Stocker la position initiale en haut de l'écran
            return {
              id: index,
              movement: randomMovement,
              left: Math.random() * window.innerWidth,
              top: initialTop,
              duration: randomSpeed,
              delay: randomDelay,
              color:
                colors[Math.floor(Math.random() * colors.length)], // Sélectionner une couleur aléatoire
              icon: icons[Math.floor(Math.random() * icons.length)], // Sélectionner une icône aléatoire
              size: Math.random() * 30 + 10, // Taille aléatoire entre 10 et 40
              initialTop, // Ajouter la position initiale en tant que propriété
            }
          }
        )

        setHearts(heartsArray)
        setBackgroundColor(
          colors[Math.floor(Math.random() * colors.length)]
        )
      }

      generateHearts()

      const handleResize = () => {
        generateHearts()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div className="background" style={{ backgroundColor }}>
      <div className="hearts-container">
        {hearts.map((heart) => {
          const Icon = heart.icon
          const movementStyle =
            heart.movement === 'left-right'
              ? { left: `${heart.left}px` }
              : { top: `${heart.top}px` }

          const resetAnimation = () => {
            if (heart.top > window.innerHeight) {
              const updatedHeart = { ...heart, top: heart.initialTop }
              setHearts((prevHearts) =>
                prevHearts.map((prevHeart) =>
                  prevHeart.id === heart.id ? updatedHeart : prevHeart
                )
              )
            }
          }

          return (
            <Icon
              key={heart.id}
              className="heart"
              style={{
                ...movementStyle,
                animationDuration: `${heart.duration}s`,
                animationDelay: `${heart.delay}s`,
                color: heart.color, // Utiliser la couleur sélectionnée
                fontSize: `${heart.size}px`, // Utiliser la taille sélectionnée
              }}
              onAnimationIteration={resetAnimation} // Appeler resetAnimation à chaque itération de l'animation
            />
          )
        })}
      </div>
    </div>
  )
}

export default BackgroundMove
