import React, { Component } from 'react';
import imageTop from '../images/random-filler/catwalk .jpg'
import { Parallax } from 'react-parallax';
import Footer from './Footer';




export default class BrandBuilders extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={imageTop} strength={500} style={{width: '100%'}}>
          <div className='parallax-bg'>
            <h2 className='parallax-h1'>Smart. Strategic. Step Ahead.</h2>
          </div>
        </Parallax>
        <h3 className='brand-h3'>Brand Builders</h3>
        <div className='bb-container'>
          <p className='bb-container-children image'>
            Strategic Aspirational Product Development
          </p>
          <p className='bb-container-children image'>
            US Delivery Chain Importation Knowledge
          </p>
          <p className='bb-container-children image'>Product, People, Promotion</p>
          <p className='bb-container-children image'>Product Seminars</p>
          <p className='bb-container-children image'>
            Price Strategy for Growth Opportunities
          </p>
          <p className='bb-container-children image'>Brand Ambassador Programs</p>
          <p className='bb-container-children image'>Seasonal Reward Programs</p>
          <p className='bb-container-children image'>Curating for US Markets</p>
          <p className='bb-container-children image'>Trunk Show Expertise</p>
          <p className='bb-container-children disappearing'></p>
          <p className='bb-container-children image'>Seasonal Forecast</p>
          <p className='bb-container-children disappearing'></p>
        </div>
        {/* <Footer/> */}
      </>
    );
  }
}
