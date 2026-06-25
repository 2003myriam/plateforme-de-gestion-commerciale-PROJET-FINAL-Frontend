import React from 'react'
import HeroSlider from '../../../components/SwiperSlid/HeroSlider'

function HeroSection() {
  return (
     <>
     <div>
      <div className=''>
        <h4>Manage your work smarter</h4>
        <h1>Organize Tasks, Track Progress,
         <br />and Boost Productivity</h1>
         <p>From daily tasks to complex projects,
          keep everything organized in one Task Management Platform</p>
      </div>
      <div>
          <HeroSlider/>
      </div>
     </div>
     </>
  )
}

export default HeroSection
