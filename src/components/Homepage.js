import React from 'react';
import { Parallax } from 'react-parallax';
import coverPic from '../images/coverPic.jpg'
import blackLogo from '../images/black-logo.png'

const image = 'https://w.wallhaven.cc/full/nk/wallhaven-nk7qd1.png';

const HomePage = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        style={{ height: 1000 }}
        bgImage={coverPic}
        strength={600}
      >
        <div className='parallax-bg'>
          <h2 className='parallax-h1'></h2>
        </div>
      </Parallax>
      <h3 className='expert-h3'>TJ Luxury Group</h3>
      {/* <img src={blackLogo} alt='TJ Logo' className='homepage-logo'/> */}
      {/* <div className='bb-container'>
        <p className='bb-container-children image'>
          Strategic Aspirational Product Development
        </p>
        <p className='bb-container-children image'>
          US Delivery Chain Importation Knowledge
        </p>
        <p className='bb-container-children image'>
          Product, People, Promotion
        </p>
        <p className='bb-container-children image'>Product Seminars</p>
        <p className='bb-container-children image'>
          Price Strategy for Growth Opportunities
        </p>
        <p className='bb-container-children image'>Brand Ambassador Programs</p>
        <p className='bb-container-children image'>Seasonal Reward Programs</p>
        <p className='bb-container-children image'>Curating for US Markets</p>
        <p className='bb-container-children image'>Trunk Show Expertise</p>
        <p className='bb-container-children'></p>
        <p className='bb-container-children image'>Seasonal Forecast</p>
        <p className='bb-container-children'></p>
      </div>
      <h3 className='client-h3'>Our Clients</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
        atque. Vel quis, assumenda vero quos ipsa aliquam harum nihil ullam
        obcaecati! Beatae eos at veniam est aspernatur et quam.
      </p>
      <h3 className='work-h3'>Latest Work</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia rerum,
        laboriosam ullam accusantium aut, reiciendis odit provident aspernatur
        placeat asperiores, id distinctio iure. Perspiciatis aspernatur
        asperiores tempora voluptas vero deserunt.
      </p> */}
    </>
  );
};

export default HomePage;
