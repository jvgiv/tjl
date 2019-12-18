import React from 'react';
import { Parallax } from 'react-parallax';
import coverPic from '../images/coverPic.jpg'
import blackLogo from '../images/black-logo.png'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import emptystage from '../images/cover pics/empty stage .jpg'
import homepic from '../images/cover pics/home page .jpg'


const image = 'https://w.wallhaven.cc/full/nk/wallhaven-nk7qd1.png';

const HomePage = () => {

  let slides = [
    (<img key={1} src={coverPic} style={{width: "100%"}} />),
    (<img key={2} src={emptystage} style={{width: "100%"}} />),
    (<img key={3} src={homepic} style={{width: "100%"}} />)
  ]
  return (
    <Carousel 
      slides={slides}
      animationSpeed={1800}
      autoPlay={6900}
      infinite
      clickToChange
    />
  );
};

export default HomePage;
