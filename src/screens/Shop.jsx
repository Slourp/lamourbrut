import React from 'react'
import Image from '../assets/shop/shop.png'
import Footer from '../layout/Footer'

const Products = () => {
  return (
    <div>
      <section>
        <div className="">
          <img
            className="w-full h-full object-cover"
            src={Image}
            style={{
              zIndex: '-1',
            }}
            alt="E-SHOP Background"
          />
        </div>
        <h2 className='absolute left-[50%] -translate-x-[50%] top-14' style={{ zIndex: 100, fontSize: '6rem', marginTop: '15rem', color: '#E45C96', fontWeight: 'bold', textShadow: '6px 6px 20px rgba(0, 0, 0, 0.6)' }} >COMING SOON</h2>
      </section>
      <Footer />
    </div>
  )
}

export default Products
