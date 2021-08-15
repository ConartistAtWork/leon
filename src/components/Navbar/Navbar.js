import React, { useState} from 'react'
import Logo from "../../imgs/logo.png"
import HamburgerIcon from "../../imgs/hamburger.png"
import { Link as RouterLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
      <div className="wrapper-nr">
        <nav className="flex">
          <div className="branding">
            <RouterLink to="/" className="nav-link"><img src={Logo} alt="" /></RouterLink>
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
                <RouterLink to="/" className="nav-link" onClick={handleClick}>Home</RouterLink>
              </div>
              <div className="menu-section main">
                <h1>Branding</h1>
                <RouterLink to="/info" className="nav-link" onClick={handleClick}>Ideas</RouterLink>
              </div>
              <div className="menu-section">
                <h1>Social</h1>
                <a className="nav-link" target="_blank" rel="noreferrer">Behance</a>
                <a className="nav-link" target="_blank" rel="noreferrer">Dribble</a>
                <a className="nav-link" target="_blank" rel="noreferrer">Twitter</a>
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
