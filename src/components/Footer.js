import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <h4>Rhode Island</h4>
          <p>
            123 lost my way hahha
            <br />
            Room 10 <br />
            New York NY 1005
            <br />
            123-456-7890
          </p>
        </div>
        <div className='footer-inner'>
          <h2>Work with us.</h2>
          <button>Contact</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
