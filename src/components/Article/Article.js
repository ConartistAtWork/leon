import React from 'react'
import "./Article.css"
import WideGraybox from "../../imgs/6.jpg"
import BigGrayBox from "../../imgs/15.jpg"
import SmallGrayBox from "../../imgs/16.jpg"

function Article() {
  return (
    <div className="article section">
      <div className="wrapper">
        <div className="container">
          <div className="item special-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliqui</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliqu</p>
          </div>
          <div className="summary">
            <div className="category">
              <h1>Category</h1>
              <p>Branding/Ideas</p>
            </div>
            <div className="category">
              <h1>Author</h1>
              <p>Graphberry</p>
            </div>
            <div className="category">
              <h1>Year</h1>
              <p>2019</p>
            </div>
          </div>
        </div>
        <div className="container main">
          <div className="img-container big" 
            style={{
              background: `url(${WideGraybox})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>

          </div>
          <div className="grid">
            <div className="item">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliqu</p>
            </div>

            <div className="item">
              <div className="img-container small" 
                style={{
                  background: `url(${BigGrayBox})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}>
                
              </div>
            </div>

            <div className="item">
              <div className="img-container small"
                style={{
                  background: `url(${SmallGrayBox})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}>

              </div>
            </div>

            <div className="item">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliqu</p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Article
