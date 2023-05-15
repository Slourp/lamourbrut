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
      className="overflow-hidden flex-col h-screen"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pt-11">
        <Headline
          headlines={headline2}
          backgroundColor="bg-black"
          textColor="text-white"
          textSize={32}
        />
      </div>

      <div className="flex flex-col justify-center items-center h-[78vh] relative">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <CountDown />
          </Suspense>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
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
