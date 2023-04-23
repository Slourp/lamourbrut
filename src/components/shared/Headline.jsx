import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ headlines, backgroundColor, textColor, textSize, animated, fixed }) => {
  return (
    <div className={`${fixed ? 'sticky-headline' : ''} ${backgroundColor} font-vcr flex justify-around z-10`}>
      <div className={`flex whitespace-nowrap space-x-[150px] ${animated ? 'marquee' : ''}`}>
        {headlines.map((headline, index) => (
          <span key={index} className={`${textColor}`} style={{
            fontSize: textSize + 'px',
          }}>
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
  animated: PropTypes.bool,
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
};

Headline.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animated: true,
};

export default Headline;
