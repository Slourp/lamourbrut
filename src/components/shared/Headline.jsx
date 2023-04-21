import React from 'react';

const Headline = ({ title, size }) => {
  return (
    <div className='bg-black font-vcr flex justify-around'>
      <span style={{
        fontSize: size
      }} className='text-white'>{title}</span>

    </div>
  );
};

export default Headline;