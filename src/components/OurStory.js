import React, { Component } from 'react';

import { Parallax } from 'react-parallax';
import Footer from './Footer';

const image = 'https://w.wallhaven.cc/full/0j/wallhaven-0jgmvw.png';

export default class OurStory extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={image} strength={500}>
          <div className='parallax-bg'>
            <h2 className='parallax-h1'>Bold. Authentic. Effective.</h2>
          </div>
        </Parallax>
        <div className='our-story-container'>
          <h3>Our Story</h3>
          <div className='our-story-containers'>
            <div className='story-child-1'>
            <div className='o-s-c-child-1'>
              <p>
                The TJ Luxury Group partnership began in 2000 when Tracy Welch hired
                James Fletcher as a Sales Executive for the Rena Lange Couture
                collection. After 15 years the two formed TJ Luxury Group, quickly
                establishing themselves as premier brand builders of emerging
                talent.
              </p>
            </div>
            <div className='o-s-c-child-2'>
              <h1>19 Years</h1>
              <h4>Catering To You</h4>
            </div>
          </div>
          </div>
          <div className='story-child-2'>
          <div className='our-story-containers'>
            <div  className='o-s-c-child-2'>
              <h1>Retail Professionals</h1>
            </div>
            <div  className='o-s-c-child-1'>
              <p>
                We work with the finest retailers in over 50 doors.  We excel when it comes to serving the consumer's needs.
              </p>
            </div>
          </div>
          </div>
          
        </div>
        {/* <Footer/> */}
        
      </>
    );
  }
}
