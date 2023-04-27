import React from 'react';
import Image from '../assets/shop/shop.png';
import Headline from '../components/shared/Headline';
import {headline2} from '../data/headlines';
import Footer from '../layout/Footer';

const Products = () => {
  return (
    <section style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
     
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
        
      <h1 
      style={{fontFamily: 'Arial Black'}}
      className="text-center  text-pink-500 text-shadow-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
      Coming <span style={{fontFamily: 'times-new-roman'}} className="">Soon</span>
    </h1>
      </div>
      <Headline
        headlines={headline2}
        backgroundColor='bg-black'
        textColor='text-white'
        textSize={32}
      />
          <Footer />

    </section>
  );
};

export default Products;
