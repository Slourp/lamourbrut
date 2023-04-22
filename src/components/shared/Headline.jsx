import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ headlines, backgroundColor, textColor }) => {
  return (
    <div className={`${backgroundColor} font-vcr flex justify-around`}>
      <div className={`flex whitespace-nowrap space-x-[150px] marquee`}>

        {headlines.map((headline, index) => (
          <span key={index} className={`${textColor} text-[58px]`}>
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
};

Headline.defaultProps = {
  backgroundColor: 'bg-black',
  textColor: 'text-white',
};

export default Headline;
