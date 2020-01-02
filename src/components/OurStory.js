import React, { Component } from "react";
import { Parallax } from "react-parallax";

import rack from "../images/random-filler/rolling racks .jpg";
import girl from "../images/random-filler/photogs and single girl in dress .jpg";
import runway from "../images/random-filler/blurred runway .jpg";
import onemodel from "../images/cover pics/one model .jpg";

export default class OurStory extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={girl} strength={300} style={{ width: '1904px'}}>
          <div className="parallax-bg">
            {/* <h2 className='parallax-h1'>Bold. Authentic. Effective.</h2> */}
          </div>
        </Parallax>
        <div className="our-story-container">
          <h3>Our Story</h3>
          {/* One */}
          <div className="story-child-1">
            <div className="o-s-c-child-1">
              <p>
                The TJ Luxury Group partnership began in 2000 when Tracy Welch
                hired James Fletcher as a Sales Executive for the Rena Lange
                Couture collection. After 15 years the two formed TJ Luxury
                Group, quickly establishing themselves as premier brand builders
                of emerging talent.
              </p>
            </div>
            <div className="o-s-c-child-2">
              <Parallax
                style={{ width: "100%" }}
                bgImage={onemodel}
                strength={500}
              >
                <div className="story-parallax-bg">
                  {/* <h1>19 Years</h1> */}
                  {/* <h4 >Catering To You.</h4>  */}
                </div>
              </Parallax>
            </div>
          </div>

          {/* two */}

          <div className="story-child-2">
            <div className="o-s-c-child-2">
              <Parallax style={{ width: "100%" }} bgImage={rack} strength={500}>
                <div className="story-parallax-bg">
                  {/* <h1>19 Years</h1>
            <h4 >Catering To You.</h4>  */}
                </div>
              </Parallax>
            </div>
            <div className="o-s-c-child-1">
              <p>
                We work with the finest retailers in over 50 doors. We seek to
                partner with luxury brands and designers that are passionate
                about product placement in the North American market.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
