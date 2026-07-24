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
import CTA from '../../components/Call to Action/CTA'
import Features from '../Features/Features'
 
 
 
 

function LandingPage() {
  return (
    <div>
     
      <SplashCursor/>
      <NavBar/>
      <HeroSection/>
      <LogoLoop/>
      <About/>
      <Features/>
      <Pricing/>
       <TemoignagePage/>
      <Question/>
      <CTA/>
     
    
 
      
    </div>
  )
}

export default LandingPage
