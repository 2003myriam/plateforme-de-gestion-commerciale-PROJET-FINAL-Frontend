import React from 'react'
import NavBar from './NavBar/NavBar'
import SplashCursor from '../../components/SplashCursor/SplashCursor'
import "./LandingPage.css"
import HeroSection from './HeroSection/HeroSection'
import LogoLoop from '../../components/LogoLoop/LogoLoop'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Question from './Question/Question'
import TemoignagePage from './Temoignage/TemoignagePage'
 
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      <LogoLoop/>
      <About/>
      <Pricing/>
      <Question/>
      <TemoignagePage/>
    
 
      
    </div>
  )
}

export default LandingPage
