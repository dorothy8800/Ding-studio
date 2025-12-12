import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PortfolioGrid from '../components/PortfolioGrid';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-neon selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;