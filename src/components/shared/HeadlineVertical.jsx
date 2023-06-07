import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({
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
      } ${backgroundColor} font-arial-black text-xl flex justify-center items-center z-10`}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        className="flex space-y-[100px]"
        style={{
          height: '100%',
          animation: `marquee-animation ${animationDuration} linear infinite`,
          writingMode: 'vertical-rl',
          width: '60px',
          /*           maxWidth: '100px',
           */
        }}
      >
        {headlines.map((headline, index) => (
          <span
            key={index}
            className={`${textColor}`}
            style={{
              fontSize: `${textSize}px`,
              display: 'block',
              whiteSpace: 'nowrap',
              transform: 'rotate(180deg)', // Inverser complètement le texte
            }}
          >
            {headline}
          </span>
        ))}
      </div>
    </div>
  )
}

Headline.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  animationDuration: PropTypes.string,
  fixed: PropTypes.bool,
}

Headline.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animationDuration: '300s',
}

export default Headline
