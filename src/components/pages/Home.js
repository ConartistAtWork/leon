import Hero from "../Hero/Hero.js"
import Cards from "../Cards/Cards.js"
import Section from '../Section/Services.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

import Portfolio from '../Portfolio/Portfolio';

function Home() {

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