import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <>
     <div className='navbar-bg'>
     <ul className='NavBar'>
       
      <li>How It Works</li>
      <li>Solutions </li>
      <li>Pricing</li>
      <li>Contact</li>
      <div>
        <button>Sign in</button>
         <button className='Navbar-btn'> Get Started</button>
      </div>
     
     </ul>
     </div>
     </>
  )
}

export default NavBar
