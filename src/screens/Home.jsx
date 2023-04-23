// screens/Home.js
import React from 'react';
import Hero from '../components/Home/Hero';
import Video from '../components/shared/Video';
import Backstage from '../components/Home/Backstage';
import ContactUs from '../components/Home/ContactUs';
import Headline from '../components/shared/Headline';
import OurStory from '../components/Home/OurStory'
import Footer from '../layout/Footer';
import { headline1 } from '../data/headlines';
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Headline
        headlines={headline1}
        backgroundColor='bg-black'
        textColor='text-white'

      />
      <OurStory />
      <Video />
      <Backstage />
      <Headline
        headlines={headline1}
        backgroundColor='bg-white'
        textColor='text-back'
      />
      <ContactUs />
      <Headline
        headlines={headline1}
        backgroundColor='bg-white'
        textColor='text-back'
      />
      <Footer />
    </div>
  );
};

export default Home;
