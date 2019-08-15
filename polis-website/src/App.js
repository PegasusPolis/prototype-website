import React from 'react';
import './App.css';

import Hero from './components/hero';
import OurVision from './components/our-vision';
import UseCases from './components/use-cases';
import TradePolis from './components/trade-polis';
import Footer2 from './components/footer2';

function App() {
  return (
    <div className="App">
      <Hero />
      <OurVision />   
      <UseCases />
      <TradePolis />
      <Footer2 />
    </div>
    
  );
}

export default App;
