import './App.css';
import Navbar from "./components/Navbar/Navbar.js"
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Footer from './components/Footer/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="main-container">
        <Router basename="/leon">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/info' component={Info} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
