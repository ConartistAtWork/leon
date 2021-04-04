import React from 'react'
import "./SectionTitle.css"

function SectionTitle({title, slogan}) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <p>{slogan}</p>
    </div>
  )
}

export default SectionTitle
