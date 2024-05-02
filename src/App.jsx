import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Play from './components/Play.jsx'
import CardArea from './components/CardArea.jsx'
import Footer from './components/Footer.jsx'

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-800'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Play />
      <CardArea />
      <Footer />
    </div>
  )
}

export default App