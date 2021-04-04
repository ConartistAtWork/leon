import React from 'react';

import "./CardItem.css";

function CardItem({iconUrl, title, text}) {
  return (
    <div className="card">
      <div className="card-container">
        <img src={iconUrl} alt=""/>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardItem
