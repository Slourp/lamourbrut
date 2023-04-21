// screens/Home.js
import React from 'react';
import Hero from '../components/Home/Hero';
import Video from '../components/shared/Video';
import Backstage from '../components/Home/Backstage';
import Story from '../components/Home/Story';
import ContactUs from '../components/Home/ContactUs';
import Headline from '../components/shared/Headline';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Headline />
      <Video />
      <Headline />
      <Story />
      <ContactUs />
    </div>
  );
};

export default Home;
