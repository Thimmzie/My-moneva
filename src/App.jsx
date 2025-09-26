import { useState, useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navbar';
import Sponsors from './components/sponsors';
import Features from './components/features';
import Initnav from './components/initnav';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Initnav />
      <Navbar />
      <Sponsors />
      <Features />
    </div>
  );
}

export default App;
