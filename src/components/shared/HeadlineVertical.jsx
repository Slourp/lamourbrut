import React from 'react'
import PropTypes from 'prop-types'

const HeadlineVertical = ({
  headlines,
  backgroundColor,
  textColor,
  textSize,
  animationDuration,
  fixed,
  scrollSpeed,
}) => {
  return (
    <div
      className={`${
        fixed ? 'sticky-headline' : ''
      } ${backgroundColor} font-arial-black flex justify-around z-10`}
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor,
        color: textColor,
        fontSize: `${textSize}px`,
        writingMode: 'vertical-rl',
        width: '50px',
        height: '100%',
        transform: 'rotate(180deg)', // Ajout de la rotation pour inverser l'affichage
      }}
    >
      <div
        className="flex flex-col space-y-[150px] marquee"
        style={{
          overflow: 'hidden',
          animation: `marquee-animation ${animationDuration} linear infinite`,
        }}
      >
        {headlines.map((headline, index) => (
          <span
            key={index}
            className={`${textColor}`}
            style={{
              fontSize: `${textSize}px`,
            }}
          >
            {headline}
          </span>
        ))}
      </div>
    </div>
  )
}

HeadlineVertical.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  animationDuration: PropTypes.string,
  position: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
  ]),
  scrollSpeed: PropTypes.number, // Ajout de la prop pour la vitesse de défilement
}

HeadlineVertical.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animationDuration: '10s',
  scrollSpeed: 1, // Valeur par défaut de la vitesse de défilement
}

export default HeadlineVertical
