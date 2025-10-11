import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navbar';
import Sponsors from './components/sponsors';
import Features from './components/features';
import Initnav from './components/initnav';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import Started from './components/started';
import Footer from './components/footer';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Navbar />
      <Sponsors />
      <Features />
      <Testimonials />
      <Pricing />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
