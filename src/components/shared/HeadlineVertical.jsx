import React from 'react'
import PropTypes from 'prop-types'

const HeadlineVertical = ({
  headlines,
  backgroundColor,
  textColor,
  textSize,
  animationDuration,
  fixed,
}) => {
  return (
    <div
      className={`${
        fixed ? 'sticky-headline' : ''
      } ${backgroundColor} font-vcr flex justify-around z-10`}
      style={{
        backgroundColor,
        color: textColor,
        fontSize: `${textSize}px`,
        writingMode: 'vertical-rl', // Texte de bas en haut
        width: '50px',
        height: '100%',
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
}

HeadlineVertical.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animationDuration: '10s', // Durée de l'animation en secondes
}

export default HeadlineVertical
