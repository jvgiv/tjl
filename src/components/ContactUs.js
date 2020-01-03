import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
import runwaybacks from "../images/cover pics/runway backs.jpg";

const image = "https://w.wallhaven.cc/full/mp/wallhaven-mp685m.jpg";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <Parallax
          style={{ width: "100%" }}
          bgImageStyle={{ top: "46%" }}
          bgImage={runwaybacks}
          strength={500}
        >
          <div className="parallax-bg">
            {/* <h2 className='parallax-h1'>Communicate with us.</h2> */}
          </div>
        </Parallax>
        <h3 className="contact-h3">Contact Us</h3>
        <div className="form-container">
          <div className="contact">
            <div className="contact-person">
              <h3>Tracy Welch</h3>
              <p>tracy@tjluxurygroup.com</p>
              <p>917-913-5073</p>
            </div>
            <div className="contact-person">
              <h3>James Fletcher</h3>
              <p href="james@tjluxurygroup.com">james@tjluxurygroup.com</p>
              <p href="tel:1-562-867-5309">917-596-0701</p>
            </div>
          </div>
          <form className="form">
            <p>
              Email to <strong>tracy@tjluxurygroup.com</strong>, or fill out the
              form below.
            </p>
            <div className="label-name">Full Name</div>
            <input
              className="form-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div className="label-email">Email</div>
            <input
              className="form-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="label-subject">Subject</div>
            <input
              className="form-input"
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
            <div className="label-message">Message</div>
            <textarea
              className="form-input"
              type="text"
              name="message"
              rows="4"
              cols="50"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button>Send</button>
          </form>
        </div>

        {/* <Footer /> */}
      </>
    );
  }
}
