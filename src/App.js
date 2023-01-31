import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AttractionDetails from './pages/AttractionDetails';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './pages/About';
import Feature from './pages/Feature';
import Itinerary from './pages/Itinerary';
import FoodMenu from './pages/FoodMenu';
import Sail from './pages/Sail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
    window.addEventListener('scroll', changeBackground);

  });

  if (isLoading) { //
    return null;
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header navbar={navbar} />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/features' element={<Feature />} />
          <Route exact path='/tour-itinerary' element={<Itinerary />} />
          <Route exact path='/food-menus' element={<FoodMenu />} />
          <Route exact path='/the-sail' element={<Sail />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/destinations/:id' element={<AttractionDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


