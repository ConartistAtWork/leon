import React from 'react'
import "./Hero.css";
import WideGraybox from "../../imgs/8.jpg"

function Hero() {
  return (
      <div className="hero"
      style={{
        background: `url(${WideGraybox})`,
        backgroundPosition: 'center 80%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="wrapper">
          <div className="container">
            <h1>Hello There!</h1>
            <p>We are Leon - Super Creative & Minimal 
            Agency  Web Template</p>
          </div>
        </div>
    </div>
  )
}

export default Hero
