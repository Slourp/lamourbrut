import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { imagesPoh } from "./ImagesPoh";

const slides = imagesPoh.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <div className="bg-white">
      <Gallery
        images={imagesPoh}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={500}
      />
      
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        rowHeight={500}
      />
    </div>
  );
}
