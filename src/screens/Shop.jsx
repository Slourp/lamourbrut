import React, { Suspense, useEffect, useState } from 'react';
import Image from '../assets/shop/eshop.jpg';
import Headline from '../components/shared/Headline';
import { headline2 } from '../data/headlines';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import NewLetter from '../components/shared/NewsLetter';
const CountDown = React.lazy(() => import('../components/shared/CountDown'));
const NewsLetter = React.lazy(() => import('../components/shared/NewsLetter'));

const Products = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1023);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-12 fixed-top overflow-hidden">
        <div className="flex justify-center top-9 overflow-hidden max-w-screen">
          <Headline
            className="overflow-hidden"
            headlines={headline2}
            backgroundColor="bg-black"
            textColor="text-white"
            textSize={32}
          />
        </div>
      </div>
      <section
        className="overflow-hidden flex-col h-[100%] pt-2 z-0"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: isMobileOrTablet ? 'cover' : 'cover',
          backgroundPosition: isMobileOrTablet ? 'right -100px' : 'center',
          backgroundRepeat: isMobileOrTablet ? 'no-repeat' : 'initial',
        }}
      >
        <div className="flex flex-col justify-center items-center h-[70vh] relative">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Suspense>
              <CountDown />
            </Suspense>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0 }} className="sticky-bottom">
            <Suspense fallback={<div>Loading...</div>}>
              <NewsLetter />
            </Suspense>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Headline
            headlines={headline2}
            backgroundColor="bg-black"
            textColor="text-white"
            textSize={32}
          />
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Products;