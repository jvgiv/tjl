import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const image = 'https://w.wallhaven.cc/full/q6/wallhaven-q6p7y7.png';

export default class Gallery extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={image} strength={500}>
        <div className='parallax-bg'>
            <h2 className='parallax-h1'>Smart. Strategic. Step Ahead.</h2>
          </div>
        </Parallax>
      <div className='container'>
        <h3 className='brand-h3'>Brand Builders</h3>
        <h1>Hello Ready to make some money!</h1>
      </div>
      </>
    );
  }
}
