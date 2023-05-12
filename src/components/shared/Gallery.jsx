import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function CustomGallery({ images }) {
  const [index, setIndex] = useState(-1)

  const handleClick = (i) => setIndex(i)

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }))

  return (
    <div className="bg-white">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        renderImage={(props) => (
          <LazyLoadImage
            {...props}
            effect="blur"
            width={props.width}
            height={props.height}
          />
        )}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        rowHeight={500}
      />
    </div>
  )
}
