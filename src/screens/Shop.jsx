import React from 'react'
import Image from '../assets/shop/shop.png'
import Headline from '../components/shared/Headline'
import {headline2} from '../data/headlines'
import Footer from '../layout/Footer'

const Products = () => {
  return (
    <section className='w-full'>
      
    <div className="">
  
      <img
        className="w-full h-[700px] object-cover"
        src={Image}
        style={{
          zIndex: '-1',
        }}
        alt="E-SHOP Background"
      />
    </div>

    <h2 style={{fontFamily: 'Arial Black'}}
     className='absolute left-[50%] -translate-x-[50%] top-14 md:text-[30px]' style={{ zIndex: 100, fontSize: ' 9em', marginTop: '10rem', color: '#E45C96',  textShadow: '6px 6px 20px rgba(0, 0, 0, 0.6)' }} >COMING <span style={{fontFamily: 'times-new-roman'}}>SOON </span></h2>
    <Headline
    headlines={headline2}
    backgroundColor='bg-black'
    textColor='text-white'
    textSize={32}
  />
    <Footer />

  </section>
  )
}

export default Products
