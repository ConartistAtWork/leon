import Navbar from "../Navbar/Navbar.js"
import HeroLabel from "../HeroLabel/HeroLabel.js"
import Contact from '../Contact/Contact.js';
import Article from '../Article/Article.js';
import Footer from '../Footer/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from '../Portfolio/Portfolio';

function Info() {
  return (
    <>
      <div className="page-container">
        <HeroLabel />
        <Article />
        <Contact />
      </div>
    </>
  );
}

export default Info;