import React from 'react'
import "./Cards.css"
import CardItem from "../CardItem/CardItem"
import ChemIcon from "../../imgs/chemistry.png";
import LampIcon from "../../imgs/lamp.png";
import GlobeIcon from "../../imgs/globe.png";


function Cards() {
  return (
    <div className="cards">
      <CardItem
        iconUrl={LampIcon}
        title="Tell Us Your Idea"
        text="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut lab"
      />
      <CardItem
        iconUrl={ChemIcon}
        title="We Will Do All The Work"
        text="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut lab"
      />
      <CardItem 
        iconUrl={GlobeIcon}
        title="Your Product is Worldwide"
        text="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut lab"
      />
    </div>
  )
}

export default Cards
