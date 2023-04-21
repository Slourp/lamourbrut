import React from 'react';
import movie from '../../assets/video/video.mp4';

const Video = () => {
  return (
    <section>
      <div className='player-bg-container'>
        <div className='player-overlay bg-black'>
          <video src={movie} autoPlay loop muted className='mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default Video;
