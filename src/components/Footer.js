import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ig from '../images/ig.svg'
import fb from '../images/fb.svg'

const Footer = () => {
  
  
  

  return (
    <>
      <footer>
        <div className='footer-inner'>
          <NavLink className='footer-link' activeClassName='' to='/gallery'>
            Gallery
          </NavLink>
          <NavLink className='footer-link' activeClassName='' to='/brand'>
            Brand Builders
          </NavLink>
          <NavLink className='footer-link' activeClassName='' to='/ourstory'>
            Our Story
          </NavLink>
          <NavLink className='footer-link' activeClassName='' to='/leadership'>
            Leadership
          </NavLink>
          <NavLink className='footer-link' activeClassName='' to='/contact'>
            Contact Us
          </NavLink>
        </div>
        <div className='footer-inner'>
          <p>
              <h4>
              New York, NY
              </h4>
            {/* <br /> */}
            917-913-5073
          </p>
        </div>
        <div className='footer-inner work-with-us'>
          <h2>Work with us.</h2>
          <Link to='/contact' className='contact-link'>Contact</Link>
          <div className='logo-container'>
            <a className='footer-logos' href='https://www.instagram.com/tjluxurygroup/' target='blank' alt='TJ Luxury Group Instagram'><img src={ig} /></a>
            <a className='footer-logos' href='https://www.facebook.com/tjluxurygroup/' target='blank' alt='TJ Luxury Group Facebook'><img src={fb} /></a>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
