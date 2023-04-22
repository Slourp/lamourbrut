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
      <Headline />
      <Video />
      {/* <Headline /> */}
      <Backstage />
      <OurStory />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
