import { useState, useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navbar';
import Sponsors from './components/sponsors';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Navbar />
      <Sponsors />
    </div>
  );
}

export default App;
