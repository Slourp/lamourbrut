import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound';
import Navbar from './layout/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
