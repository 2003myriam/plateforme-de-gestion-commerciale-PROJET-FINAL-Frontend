import React from 'react'
import NavBar from './NavBar/NavBar'
import SplashCursor from '../../components/SplashCursor/SplashCursor'
import "./LandingPage.css"
import HeroSection from './HeroSection/HeroSection'
import LogoLoop from '../../components/LogoLoop/LogoLoop'
import About from './About/About'
import Temoignage from './Temoignage/Temoignage'
import Pricing from './Pricing/Pricing'
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      <LogoLoop/>
      <About/>
      <Temoignage/>
      <Pricing/>
      
    
 
      
    </div>
  )
}

export default LandingPage
