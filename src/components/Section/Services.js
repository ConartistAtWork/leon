import React from 'react'
import "./Services.css"
import SectionTitle from '../SectionTitle/SectionTitle.js'
import PrinterIcon from '../../imgs/icon-1.png'
import AppIcon from '../../imgs/icon-2.png'
import UXIcon from '../../imgs/icon-3.png'
import MonitorIcon from '../../imgs/icon-4.png'
import VerticalBar from '../../imgs/bar.png'
import Img from '../../imgs/13.jpg'

function Section() {
  return (
    <div className="services section">
      <div className="wrapper">
        <SectionTitle title={"services"} slogan ={"Don't be busy, be productive"}/>
        <div className="container">
          <div className="grid">
            <div className="line-of-work">
              <div className="item">
                <img src={PrinterIcon} alt=""/>
              </div>
              <div className="item">
                <h1>Graphic Design</h1>
                <p>Graphic design is the process of visual 
                communication and problem-solving 
                using one or more of typography, 
                photography and illustration.</p>
              </div>        
            </div>

            <div className="line-of-work">
              <div className="item">
                <img src={AppIcon} alt="" />
              </div>
              <div className="item">
                <h1>Web Design</h1>
                <p>Web design encompasses many different 
                skills and disciplines in the production 
                and maintenance of websites.</p>
              </div>        
            </div>

            <div className="line-of-work">
              <div className="item">
                <img src={UXIcon} alt="" />
              </div>
              <div className="item">
                <h1>UI & UX</h1>
                <p>Process of enhancing user satisfaction 
                with a product by improving the 
                usability, accessibility, and pleasure 
                provided in the interaction.</p>
              </div>        
            </div>

            <div className="line-of-work">
              <div className="item">
                <img src={MonitorIcon} alt="" />
              </div>
              <div className="item">
                <h1>Web Development</h1>
                <p>Web development is a broad term for 
                the work involved in developing a web site 
                for the Internet or an intranet.</p>
              </div>        
            </div>
          </div>
          <div className="side-img right">
            <div className="img-holder"
              style={{
                background: `url(${Img})`,
                backgroundPosition: 'left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              ></div>
            <img src={VerticalBar} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
