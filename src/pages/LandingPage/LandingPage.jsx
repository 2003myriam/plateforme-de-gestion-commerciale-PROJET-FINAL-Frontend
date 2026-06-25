import React from 'react'
import NavBar from './NavBar/NavBar'
import SplashCursor from '../../components/SplashCursor/SplashCursor'
import "./LandingPage.css"
import HeroSection from './HeroSection/HeroSection'
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      
    
 
      
    </div>
  )
}

export default LandingPage
