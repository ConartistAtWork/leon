import React from 'react'
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import BarAndL from '../../imgs/barnl.png'
import Img from '../../imgs/14.jpg'

function About() {
  return (
    <div className="about section">
      <div className="wrapper">
        <SectionTitle title={"about"} slogan ={"Less is more work"}/>
        <div className="container">
          <div className="side-img left">
            <div className="img-holder"
              style={{
                background: `url(${Img})`,
                backgroundPosition: 'left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <img src={BarAndL} alt="" />
          </div>
          <div className="item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliqui</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliqu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
