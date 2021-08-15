import React from 'react'
import "./ProjectItem.css";

function ProjectItem({title, text, url}) {
  return (
    <div className="project-item">
      <div className="img-container" 
            style={{
              background: `url(${url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ProjectItem
