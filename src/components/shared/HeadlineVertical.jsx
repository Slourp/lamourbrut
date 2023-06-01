import React from 'react';
import PropTypes from 'prop-types';
import { headline4 } from '../../data/headlines';

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
      } ${backgroundColor} font-arial-black flex justify-start items-start z-10`}
      style={{
        position: fixed ? 'sticky' : 'relative',
        top: '0',
        left: '0',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        className="flex"
        style={{
          height: '100%',
          animation: `marquee-animation ${animationDuration} linear infinite`,
          overflow: 'hidden',
          writingMode: 'vertical-rl',
          width: 'max-content',
          maxWidth: '100px',
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
            }}
          >
            {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

Headline.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  animationDuration: PropTypes.string,
  fixed: PropTypes.bool,
};

Headline.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animationDuration: '300s',
};

export default Headline;
