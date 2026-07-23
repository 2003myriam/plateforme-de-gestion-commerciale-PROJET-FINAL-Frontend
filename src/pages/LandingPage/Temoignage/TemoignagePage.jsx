import React from 'react'
import Carousel from '../../../components/carouselTemoignage/Carousel'
import "./Temoignage.css"
 

function TemoignagePage() {
  return (
    <section className='avis'>
    <h2>What Our Customers Say</h2>
    <p>Discover how businesses streamline their daily operations and boost productivity with our platform.</p>

    <div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={700}
    autoplay={false}
    autoplayDelay={3000}
    pauseOnHover={false}
    loop={false}
    round={false}
  />
</div>
    </section>
   
  )
}

export default TemoignagePage
