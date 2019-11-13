import React, { Component } from 'react';

import { Parallax } from 'react-parallax';
import Footer from './Footer';

const image = 'https://w.wallhaven.cc/full/0j/wallhaven-0jgmvw.png';
const image2 = 'https://w.wallhaven.cc/full/j5/wallhaven-j5lygp.jpg';
const image3 = 'https://w.wallhaven.cc/full/j8/wallhaven-j8k1xw.jpg';

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
     {/* One */}
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
                 <Parallax style={{width: '100%'}} bgImage={image2} strength={500}>
          <div className='story-parallax-bg'>
            <h1>19 Years</h1>
            <h4 >Catering To You.</h4> 
          </div>
        </Parallax>
            </div>
            </div>

            {/* two */}

               
             <div className='story-child-2'>
               <div className='o-s-c-child-2'>
                 <Parallax style={{width: '100%'}} bgImage={image3} strength={500}>
          <div className='story-parallax-bg'>
            <h1>19 Years</h1>
            <h4 >Catering To You.</h4> 
          </div>
        </Parallax>
            </div>
                      <div className='o-s-c-child-1'>
              <p>
                The TJ Luxury Group partnership began in 2000 when Tracy Welch hired
                James Fletcher as a Sales Executive for the Rena Lange Couture
                collection. After 15 years the two formed TJ Luxury Group, quickly
                establishing themselves as premier brand builders of emerging
                talent.
              </p>
            </div>
            </div>

          

          </div>

      
      </>
    );
  }
}
