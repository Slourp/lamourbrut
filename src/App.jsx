import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Shop from './screens/Shop';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound';

import Navbar from './layout/Navbar';

import './App.css';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        {children}
      </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
