import { Carousel } from 'react-responsive-carousel';


import coc1 from '../../assets/about/speos/coc-karelvaldmann/coc1.jpg'
import coc2 from '../../assets/about/speos/coc-karelvaldmann/coc2.jpg'
import coc3 from '../../assets/about/speos/coc-karelvaldmann/coc3.jpg'
import coc4 from '../../assets/about/speos/coc-karelvaldmann/coc4.jpg'
import coc5 from '../../assets/about/speos/coc-karelvaldmann/coc5.jpg'
import coc6 from '../../assets/about/speos/coc-karelvaldmann/coc6.jpg'
import coc7 from '../../assets/about/speos/coc-karelvaldmann/coc7.jpg'
import coc8 from '../../assets/about/speos/coc-karelvaldmann/coc8.jpg'

import us1 from '../../assets/about/speos/us-teradanatsuki/us1.jpg'
import us2 from '../../assets/about/speos/us-teradanatsuki/us2.jpg'
import us3 from '../../assets/about/speos/us-teradanatsuki/us3.jpg'
import us4 from '../../assets/about/speos/us-teradanatsuki/us4.jpg'
import us5 from '../../assets/about/speos/us-teradanatsuki/us5.jpg'

import sl1 from '../../assets/about/speos/sl-amirasnaerosjabali/sl1.jpg'
import sl2 from '../../assets/about/speos/sl-amirasnaerosjabali/sl2.jpg'
import sl3 from '../../assets/about/speos/sl-amirasnaerosjabali/sl3.jpg'
import sl4 from '../../assets/about/speos/sl-amirasnaerosjabali/sl4.jpg'
import sl5 from '../../assets/about/speos/sl-amirasnaerosjabali/sl5.jpg'
import sl6 from '../../assets/about/speos/sl-amirasnaerosjabali/sl6.jpg'

import uatw1 from '../../assets/about/speos/uatw-raphaelgarsault/uatw1.jpg'
import uatw2 from '../../assets/about/speos/uatw-raphaelgarsault/uatw2.jpg'
import uatw3 from '../../assets/about/speos/uatw-raphaelgarsault/uatw3.jpg'
import uatw4 from '../../assets/about/speos/uatw-raphaelgarsault/uatw4.jpg'
import uatw5 from '../../assets/about/speos/uatw-raphaelgarsault/uatw5.jpg'
import uatw6 from '../../assets/about/speos/uatw-raphaelgarsault/uatw6.jpg'

import awp1 from '../../assets/about/speos/awp-elyasaiapina/awp1.jpg'
import awp2 from '../../assets/about/speos/awp-elyasaiapina/awp2.jpg'
import awp3 from '../../assets/about/speos/awp-elyasaiapina/awp3.jpg'
import awp4 from '../../assets/about/speos/awp-elyasaiapina/awp4.jpg'
import awp5 from '../../assets/about/speos/awp-elyasaiapina/awp5.jpg'

/* import lf1 from '../../assets/about/speos/LF-noabayle/lf1.jpg'
import lf2 from '../../assets/about/speos/lf-noabayle/lf2.jpg'
import lf3 from '../../assets/about/speos/lf-noabayle/lf3.jpg'
import lf4 from '../../assets/about/speos/lf-noabayle/lf4.jpg'
import lf5 from '../../assets/about/speos/lf-noabayle/lf5.jpg'
import lf6 from '../../assets/about/speos/lf-noabayle/lf6.jpg' */

const photographers = [
  {
    name: 'CIRCLE OF LIFE BY KAREL VALDMANN',
    images: [
      { src: coc1, alt: 'photo 1' },
      { src: coc2, alt: 'photo 2' },
      { src: coc3, alt: 'photo 3' },
      { src: coc4, alt: 'photo 4' },
      { src: coc5, alt: 'photo 5' },
      { src: coc6, alt: 'photo 6' },
      { src: coc7, alt: 'photo 7' },
      { src: coc8, alt: 'photo 8' },
    ],
  },

  {
    name: 'UNIVERS BY TERADA NATSUKI',
    images: [
      { src: us1, alt: 'photo 1' },
      { src: us2, alt: 'photo 2' },
      { src: us3, alt: 'photo 3' },
      { src: us4, alt: 'photo 4' },
      { src: us5, alt: 'photo 5' },
    ],
  },

  {
    name: 'SELFLOVE BY AMIRA SNAEROS JABALI',
    images: [
      { src: sl1, alt: 'photo 1' },
      { src: sl2, alt: 'photo 2' },
      { src: sl3, alt: 'photo 3' },
      { src: sl4, alt: 'photo 4' },
      { src: sl5, alt: 'photo 5' },
      { src: sl6, alt: 'photo 6' },
    ],
  },

  {
    name: 'US AGAINST THE WOLD BY RAPHAEL GARSAULT',
    images: [
      { src: uatw1, alt: 'photo 1' },
      { src: uatw2, alt: 'photo 2' },
      { src: uatw3, alt: 'photo 3' },
      { src: uatw4, alt: 'photo 4' },
      { src: uatw5, alt: 'photo 5' },
      { src: uatw6, alt: 'photo 6' },
    ],
  },

  {
    name: 'AFTER WASHING PARTY BY ELYA SAIAPINA',
    images: [
      { src: awp1, alt: 'photo 1' },
      { src: awp2, alt: 'photo 2' },
      { src: awp3, alt: 'photo 3' },
      { src: awp4, alt: 'photo 4' },
      { src: awp5, alt: 'photo 5' },
    ],
  },

/*   {
    name: 'LA FEMME BY NOA BAYLE',
    images: [
      { src: lf1, alt: 'photo 1' },
      { src: lf2, alt: 'photo 2' },
      { src: lf3, alt: 'photo 3' },
      { src: lf4, alt: 'photo 4' },
      { src: lf5, alt: 'photo 5' },
      { src: lf6, alt: 'photo 6' },
    ],
  }, */
]



function PhotographerList() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
      {photographers.map((photographer) => (
        <div key={photographer.name}>
          <h2 style={{fontSize: '20px', textAlign: 'center', margin:'2rem 0'}}>{photographer.name}</h2>
          
          <div style={{display: 'flex'}}>
            {photographer.images.map((image, index) => (
              <img style={{height: '300px'}} key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotographerList;
