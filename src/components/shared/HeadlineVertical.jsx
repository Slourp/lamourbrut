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
        position: fixed ? 'sticky' : 'relative',
        top: fixed ? '100px' : 'auto',
        bottom: fixed ? '0' : 'auto',
        left: '0',
        right: '0',
        backgroundColor,
        color: textColor,
        fontSize: `${textSize}px`,
        writingMode: 'vertical-rl',
        width: '50px',
        height: 'calc(100vh - 100px)', // Ajuster la hauteur selon vos besoins
        transform: 'rotate(180deg)',
        overflow: 'hidden',
      }}
    >
      <div
        className="flex flex-col space-y-[150px] marquee"
        style={{
          height: fixed ? 'calc(100% - 100px)' : 'calc(100% - 200px)',
          animation: `marquee-animation ${animationDuration} linear infinite`,
          overflow: 'hidden',
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

export default HeadlineVertical
