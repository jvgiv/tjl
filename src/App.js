import React from "react";
import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import BrandBuilder from "./components/BrandBuilders";
import ContactUs from "./components/ContactUs";
import Gallery1 from "./components/Gallery";
import Leadership from "./components/Leadership";
import OurStory from "./components/OurStory";
import Home from "./components/Home";
import tjlogo from "./images/tjlogo.png";
import PageNotFound from './components/PageNotFound'

import WhiteLogo from "./images/black-white.png";
import BlackLogo from "./images/black-logo.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavLink className="link-line " to="/">
          <img className="navbar-pic" src={BlackLogo} alt="logo" />
        </NavLink>
        <div className="navbar-links">
          <NavLink className="link" activeClassName="" to="/brand">
            Our Strategy
          </NavLink>
          <NavLink className="link" activeClassName="" to="/ourstory">
            Our Story
          </NavLink>
          <NavLink className="link" activeClassName="" to="/leadership">
            Leadership
          </NavLink>
          <NavLink className="link" activeClassName="" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="link" activeClassName="" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
  <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Home} />
        <Route path="/gallery" component={Gallery1} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/brand" component={BrandBuilder} />
        <Route path="/ourstory" component={OurStory} />
        <Route path="/leadership" component={Leadership} />
        <Route path="*" component={PageNotFound} />
  </Switch>
        <Footer />
     
    </div>
  );
}

export default App;
