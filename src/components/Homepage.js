import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import homePageOne from "../images/cover pics/home-page-1.jpg";
import homePageTwo from "../images/cover pics/home-page-2.jpg";
import homePageThree from "../images/cover pics/home-page-3.jpg";

const HomePage = () => {
  let slides = [
    <img key={1} src={homePageOne} alt="cover Picture 1 - Model" style={{ width: "100%" }} />,
    <img key={2} src={homePageTwo} alt="cover Picture 2 - Empty Runway" style={{ width: "100%" }} />,
    <img key={3} src={homePageThree} alt="cover picture 3 - Model Runway" style={{ width: "100%" }} />
  ];
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
