// screens/Home.js
import React from 'react';
import Hero from '../components/Home/Hero';
import Video from '../components/shared/Video';
import Backstage from '../components/Home/Backstage';
import ContactUs from '../components/Home/ContactUs';
import Headline from '../components/shared/Headline';
import OurStory from '../components/Home/OurStory'
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Headline
        headlines={['BRUT DE DOUCEUR', 'FOLIE CONTROLEE']}
        backgroundColor='bg-black'
        textColor='text-white'

      />
      <Video />

      <Backstage />
      <OurStory />
      <ContactUs />
      <Headline
        headlines={['BRUT DE DOUCEUR', 'FOLIE CONTROLEE']}
        backgroundColor='bg-white'
        textColor='text-back'
      />
      <Footer />
    </div>
  );
};

export default Home;
