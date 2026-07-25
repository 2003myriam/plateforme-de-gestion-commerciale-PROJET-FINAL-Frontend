import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../../../assets/logo.png"

function NavBar() {
  return (
    <>
     <div className="NavBar">
  
  <div className="NavBarLogo">
    logo
  </div>

  <ul className="NavBarContent">
     
    <li>About</li>
    <li className="active">How It Works</li>
    <li>Solutions</li>
    <li>Pricing</li>
    <li>Contact</li>
  </ul>

  <div className="NavBar-2btn">
    <Link className="signin-btn" to="/login">
  Sign in
</Link>

<Link className="Navbar-btn" to="/register">
  Get Started <FaLongArrowAltRight />
</Link>
  </div>

</div>
     </>
  )
}

export default NavBar
