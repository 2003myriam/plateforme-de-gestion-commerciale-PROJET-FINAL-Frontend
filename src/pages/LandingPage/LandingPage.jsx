import React from 'react'
import NavBar from './NavBar/NavBar'
import SplashCursor from '../../components/SplashCursor/SplashCursor'
import "./LandingPage.css"
import HeroSection from './HeroSection/HeroSection'
import LogoLoop from '../../components/LogoLoop/LogoLoop'
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      <LogoLoop/>
      
    
 
      
    </div>
  )
}

export default LandingPage
