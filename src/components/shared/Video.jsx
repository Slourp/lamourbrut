import React from 'react'
import movie from '../../assets/video/home.mp4'

const Video = () => {
  return (
    <section>
      <div className="player-bg-container">
        <div className="player-overlay bg-black">
          {/*  <video src={movie} autoPlay loop muted className='mx-auto' /> */}
          <video
            src={movie}
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Video
