import React from 'react'
import NavBar from './NavBar/NavBar'
import SplashCursor from '../../components/SplashCursor/SplashCursor'
import "./LandingPage.css"
import HeroSection from './HeroSection/HeroSection'
import LogoLoop from '../../components/LogoLoop/LogoLoop'
import About from './About/About'
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      <LogoLoop/>
      <About/>
      
    
 
      
    </div>
  )
}

export default LandingPage
