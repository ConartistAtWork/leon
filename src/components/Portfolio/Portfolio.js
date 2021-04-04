import React, {useState, useEffect} from 'react'
import "./Portfolio.css"
import "../ProjectItem/ProjectItem.css"
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectItem from '../ProjectItem/ProjectItem'
import GrayBox1 from "../../imgs/10.jpg"
import GrayBox2 from "../../imgs/11.jpg"
import GrayBox3 from "../../imgs/12.jpg"



function Portfolio() {

  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(3)
  const [hide, setHide] = useState(false)
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3)
    setHide(true)
  }
  const things = [{id: 1,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox1}, 
                  {id: 2,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox2}, 
                  {id: 3,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox3},
                  {id: 4,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox1}, 
                  {id: 5,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox2}, 
                  {id: 6,
                  title: "Project Here", 
                  text: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
                  url: GrayBox3}];   
  const projectItems = things.slice(0, visible).map((things) =>
    <ProjectItem
      key={things.id}
      title={things.title}
      text={things.text}
      url={things.url}
    />
  );



  return (
    <div className="portfolio section">
      <div className="wrapper">
        <SectionTitle title={"portfolio"} slogan={"If you do it right, it will last forever."}/>
        <div className="container">
          {projectItems}
        </div>
        <button style={hide ? {display: "none"} : {display: "block"}} onClick={loadMore}>Show Me More</button>
      </div>
    </div>
  )
}

export default Portfolio
