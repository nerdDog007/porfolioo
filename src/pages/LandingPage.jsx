import React from 'react'
import NavBar from '../components/NavBar'
import HeroSec from '../layouts/HeroSec'
import About from '../layouts/About'
import Cv from '../layouts/Cv'
import Projects from '../layouts/Projects'
import Skills from '../layouts/Skills'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='bg-gray-900 text-white flex flex-col gap-12'>
        <NavBar />
        <HeroSec/>
        <About/>
        <Cv/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default LandingPage