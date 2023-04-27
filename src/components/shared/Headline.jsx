import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ headlines, backgroundColor, textColor, textSize, animationDuration, fixed }) => {
  return (
    <div className={`${fixed ? 'sticky-headline' : ''} ${backgroundColor} font-vcr flex justify-around z-10`}>
      <div className={`flex whitespace-nowrap space-x-[150px] marquee`} style={{animationDuration: animationDuration}}>
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
  animationDuration: PropTypes.string,
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
};

Headline.defaultProps = {
  fixed: false,
  backgroundColor: 'bg-black',
  textColor: 'text-white',
  textSize: 58,
  animationDuration: '17s',
};

export default Headline;
