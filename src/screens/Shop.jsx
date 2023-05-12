import React, { Suspense } from 'react'
import Image from '../assets/shop/eshop.jpg'
import Headline from '../components/shared/Headline'
import { headline2 } from '../data/headlines'
import Footer from '../layout/Footer'
import NewLetter from '../components/shared/NewsLetter'
const CountDown = React.lazy(() =>
  import('../components/shared/CountDown')
)
const NewsLetter = React.lazy(() =>
  import('../components/shared/NewsLetter')
)

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
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <Suspense fallback={<div>Loading...</div>}>
          <CountDown />
        </Suspense>
        <div className='w-1/3 mt-1'>
        <Suspense fallback={<div>Loading...</div>}>
          <NewsLetter />
        </Suspense>
      </div>
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
