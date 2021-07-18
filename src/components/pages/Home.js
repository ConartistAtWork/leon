import Hero from "../Hero/Hero.js"
import Cards from "../Cards/Cards.js"
import Section from '../Section/Services.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Portfolio from '../Portfolio/Portfolio';
import { useEffect } from "react";

function Home() {
  useEffect( () =>
    window.scrollTo(0, 0)
  )

  return (
    <>
      <div className="page-container">
        <Hero />
        <Cards />
        <Section />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;