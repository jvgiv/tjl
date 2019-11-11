import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const image = 'https://w.wallhaven.cc/full/dg/wallhaven-dgomzg.png';

export default class Gallery extends Component {
  render() {
    return (
      <div className='container'>
        <Parallax bgImage={image} strength={500}>
          <div className='parallax-bg'>
            <h2 className='parallax-h1'>Smart. Strategic. Gallery Ahead.</h2>
          </div>
        </Parallax>
      </div>
    );
  }
}
