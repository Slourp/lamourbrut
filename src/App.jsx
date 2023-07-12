import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './screens/Home'
import Shop from './screens/Shop'
import AboutUs from './screens/AboutUs'
import NotFound from './screens/NotFound'
/* import CountDownVisitors from './components/CountDown/CountDownVisitors'
 */
import Navbar from './layout/Navbar'
import Mentions from './components/Mentions/Mentions'
import Confidentials from './components/Mentions/Confidentials'

import './App.css'
import Story from './screens/Story'
import Layout from './shopify/pages/Layout'
import Footer from './layout/Footer'
import CheckOut from './shopify/components/Checkout/CheckOut'
import CarousselProducts from './shopify/components/CarousselProducts/CarousselProducts'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Layout />} />
          <Route path="test" element={<CarousselProducts />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="story" element={<Story />} />
          <Route path="*" element={<NotFound />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="mentionslegales" element={<Mentions />} />
          <Route
            path="politiquedeconfidentialite"
            element={<Confidentials />}
          />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
