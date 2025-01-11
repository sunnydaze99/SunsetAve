import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Taskbar from './taskbar';
import Hero from './hero';
import Footer from './footer';
import New from './pages/new'; 
import Shop from './pages/shop'; 
import Dresses from './pages/dresses';
import About from './pages/about'; 
import Contact from './pages/contact'; 
import Review from './pages/reviews'; 
import './styles/main.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Taskbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/new" element={<New />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;