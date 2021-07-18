import HeroLabel from "../HeroLabel/HeroLabel.js"
import Contact from '../Contact/Contact.js';
import Article from '../Article/Article.js';

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