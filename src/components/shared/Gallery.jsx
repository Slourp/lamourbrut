import { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'

import 'yet-another-react-lightbox/styles.css'

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
