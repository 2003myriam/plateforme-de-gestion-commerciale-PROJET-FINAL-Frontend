import React from 'react'
import HeroSlider from '../../../components/SwiperSlid/HeroSlider'
import "./HeroSection.css"

function HeroSection() {
  return (
     <>
    <div className="HeroSection">

    <div className="HeroContent">
        <h4> Manage your work smarter</h4>

        <h1>
            Organize Tasks, Track Progress,
            <br />
            and Boost Productivity
        </h1>

        <p>
            From daily tasks to complex projects,
            keep everything organized in one Task Management Platform.
        </p>

        <div className="HeroBtns">
            <button className="PrimaryBtn">Get Started</button>
            <button className="SecondaryBtn">Learn More</button>
        </div>
    </div>

    <div className="HeroSliderContainer">
        <HeroSlider />
    </div>

</div>
</>
  )
}

export default HeroSection
