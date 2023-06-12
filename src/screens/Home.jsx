import React from 'react'
import Hero from '../components/Home/Hero'
import Video from '../components/shared/Video'
import Backstage from '../components/Home/Backstage'
import ContactUs from '../components/Home/ContactUs'
import Headline from '../components/shared/Headline'
import OurStory from '../components/Home/OurStory'
import Footer from '../layout/Footer'
import { headline1 } from '../data/headlines'

const Home = () => {
  return (
    <div className="overflow-hidden flex-col mx-auto">
      <Hero loading="lazy" />
      <Headline
        headlines={headline1}
        backgroundColor="bg-black"
        textColor="text-white"
        textSize={32}
        className="max-xs: font-extrabold"
      />
      <OurStory />
      <Headline
        headlines={headline1}
        backgroundColor="bg-black"
        textColor="text-white"
        textSize={32}
        className="max-xs: font-extrabold"
      />
      <Video />
      <Backstage loading="lazy" />
      <Headline
        headlines={headline1}
        backgroundColor="bg-white"
        textColor=""
        textSize={32}
        className="max-xs: font-extrabold"
      />
      <ContactUs loading="lazy" />
      <Footer />
    </div>
  )
}

export default Home
