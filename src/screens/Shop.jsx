import React from 'react'
import Image from '../assets/shop/shop.png'
import Headline from '../components/shared/Headline'
import { headline2 } from '../data/headlines'
import Footer from '../layout/Footer'
import CountDown from '../components/shared/CountDown'

const Products = () => {
  return (
    <section
      className="overflow-hidden flex-col mx-auto"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center h-[90vh]">
        <CountDown />
      </div>
      <Headline
        headlines={headline2}
        backgroundColor="bg-black"
        textColor="text-white"
        textSize={32}
      />
      <Footer />
    </section>
  )
}

export default Products
