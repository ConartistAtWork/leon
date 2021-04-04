import React from 'react'
import "./HeroLabel.css"
import WideGraybox from "../../imgs/7.jpg"

function HeroLabel() {
  return (
    <div className="hero special"
      style={{
        background: `url(${WideGraybox})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

      <div className="label">
        <p>BRANDING / IDEAS</p>
        <h1>Branding Stationary Project</h1>
      </div>
    </div>
  )
}

export default HeroLabel
