import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import BrandBuilder from './components/BrandBuilders';
import ContactUs from './components/ContactUs';
import Gallery1 from './components/Gallery';
import Leadership from './components/Leadership';
import OurStory from './components/OurStory';
import Home from './components/Home';
import tjlogo from './images/tjlogo.png';

import WhiteLogo from './images/black-white.png';
import BlackLogo from './images/black-logo.png';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <img className='navbar-pic' src={BlackLogo} alt='logo' />
        <div className='navbar-links'>
          <NavLink className='link' activeClassName='' to='/brand'>
            Our Strategy
          </NavLink>
          <NavLink className='link' activeClassName='' to='/ourstory'>
            Our Story
          </NavLink>
          <NavLink className='link' activeClassName='' to='/leadership'>
            Leadership
          </NavLink>
          <NavLink className='link' activeClassName='' to='/gallery'>
            Gallery
          </NavLink>
          <NavLink className='link' activeClassName='' to='/contact'>
            Contact Us
          </NavLink>
        </div>
      </div>


      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery1} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/brand' component={BrandBuilder} />
      <Route path='/ourstory' component={OurStory} />
      <Route path='/leadership' component={Leadership} />
      <Footer />
    </div>
  );
}

export default App;
