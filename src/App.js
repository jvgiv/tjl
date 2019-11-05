import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import BrandBuilder from './components/BrandBuilders'
import ContactUs from './components/ContactUs'
import Gallery from './components/Gallery'
import Leadership from './components/Leadership'
import OurStory from './components/OurStory'
import Home from './components/Home'
import tjlogo from './images/tjlogo.png'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <img className='navbar-pic' src={tjlogo} alt='logo' />
        <NavLink className='link' activeClassName='' to='/gallery'>Gallery</NavLink>
        <NavLink className='link' activeClassName='' to='/brand'>Brand Builders</NavLink>
        <NavLink className='link' activeClassName='' to='/ourstory'>Our Story</NavLink>
        <NavLink className='link' activeClassName='' to='/leadership'>Leadership</NavLink>
        <NavLink className='link' activeClassName='' to='/contact'>Contact Us</NavLink>
      </div>      



      <Route path='/' component={Home}/>
      <Route path='/gallery' component={Gallery} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/brand' component={BrandBuilder} />
      <Route path='/ourstory' component={OurStory} />
      <Route path='/leadership' component={Leadership} />
    </div>
  );
}

export default App;
