import React, { Component } from "react";

import { Parallax } from "react-parallax";
import backstage from "../images/random-filler/back stage photo shoot .jpg";

export default class Leadership extends Component {
  render() {
    return (
      <>
        <Parallax
          style={{ width: "100%" }}
          bgImage={backstage}
          strength={500}
          bgImageStyle={{ top: "-60%" }}
        >
          <div className="parallax-bg">
            {/* <h2 className='parallax-h1'>Bold. Authentic. Effective.</h2> */}
          </div>
        </Parallax>
        <div className="lea-container">
          <div className="tracy-container">
            <div>
              {/* <img className='img-squared shadow' src={tracy} alt='tracy' /> */}
            </div>
            <div className="tracy-info">
              <h2>Tracy Welch</h2>
              {/* <p>917-913-5073</p> */}
              {/* <p>tracy@tjluxurygroup.com</p> */}
              <p>
                Starting her career at Escada USA as a sales assistant, Tracy
                worked her way through the House of Escada to launch and develop
                many labels- Nic Janick, Cerutti 1881, and Escada Elements to
                name a few. After 11 years she left as Executive Vice President
                of Escada Brands in 1998 to join Rena Lange USA. As President of
                Rena Lange she quickly began strategic development of this
                evolving Brand. During her tenure the collections RENA, Rena
                Lange handbags and shoes, Mabrun and St. Emile were launched.
              </p>
            </div>
          </div>
          <div className="james-container">
            <div className="james-info">
              <h2>James Fletcher</h2>
              {/* <p>917-596-0701</p>
              <p>james@tjluxurygroup.com</p> */}
              <p>
                With a strong retail background James Fletcher began his career
                at Saks Fifth Avenue. During his 5 year tenure at the New York
                Store, he managed several areas including men’s, children’s and
                home. Neiman Marcus soon came calling and he went onto managing
                women’s Fine Apparel at the Short Hills location where he
                launched many a Brand. While at Rena Lange, he moved from Sales
                Executive to Vice President of Sales.
              </p>
            </div>
            <div>
              {/* <img className='img-squared shadow' src={jim} alt='jim' /> */}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}
