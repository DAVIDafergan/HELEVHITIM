import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Charity from './components/Charity';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Charity />
        <Gallery />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
