import React, { useState, useEffect } from 'react'
import Logo from "../../imgs/logo.png"
import HamburgerIcon from "../../imgs/hamburger.png"
import { Link } from 'react-scroll'
import { Link as RouterLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (click) {
  //         document.body.style.overflow = 'hidden';
  //   }
  //   else if (!click) {
  //     document.body.style.overflow = 'unset';
  //   }
  // });

  return (
    <div className="navbar">
      <div className="wrapper-nr">
        <nav className="flex">
          <div className="branding">
            <Link to="hero" smooth="true"> 
              <RouterLink to="/" className="nav-link"><img src={Logo} alt="" /></RouterLink>
            </Link>
          </div>
          <div className="hamburger" onClick={handleClick}>
            <img src={HamburgerIcon} alt="" />
          </div>
          <div className={click ? 'menu show' : 'menu'}>
            <div className="close" onClick={handleClick}>
              <i className="fas fa-times"></i>
            </div>
            <div className="sections">
              <div className="menu-section main">
                <h1>Menu</h1>

                <Link to="hero" smooth="true" onClick={handleClick}>              
                  <RouterLink to="/" className="nav-link">Home</RouterLink>
                </Link>
                <Link to="services" className="nav-link" smooth="true" onClick={handleClick}>
                  <RouterLink to="/" className="nav-link">Services</RouterLink>
                </Link>
                <Link to="portfolio" className="nav-link" smooth="true" onClick={handleClick}>
                  <RouterLink to="/" className="nav-link">Portfolio</RouterLink>
                </Link>
                <Link to="about" className="nav-link" smooth="true" onClick={handleClick}>
                  <RouterLink to="/" className="nav-link">About</RouterLink>
                </Link>
                <Link to="hero" smooth="true" onClick={handleClick}>
                  <RouterLink to="info" className="nav-link" smooth="true" onClick={handleClick}>Info</RouterLink>
                </Link>
              </div>
              <div className="menu-section">
                <h1>Get In Touch</h1>
                <Link className="nav-link" onClick={handleClick}>Contact Me</Link>
              </div>
              <div className="menu-section">
                <h1>Get Social</h1>
                <Link to="/behance" className="nav-link">Behance</Link>
                <Link to="/dribble" className="nav-link">Dribble</Link>
                <Link to="/twitter" className="nav-link">Twitter</Link>
              </div>

            </div>
          </div>
          <div className={click ? "filter show" : "filter"}></div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
