import React from 'react';
import './styles/main.scss';
import Header from './components/layout/header/header'
import About from './components/about/About';
import Prices from './components/tours/Prices'
import Testimonials from './components/testimonials/Testimonials';
import Quote from './components/quote/Quote';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Testimonials />
      <Prices />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
