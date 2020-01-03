import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
import runwaybacks from "../images/cover pics/runway backs.jpg";



export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };


  submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ 
          status: "SUCCESS",
          name: "",
          email: "",
          subject: "", 
          message: "" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

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
          <form 
            className="form"
            onSubmit={this.submitForm}
            action="https://formspree.io/xdoajdey"
            method="POST"  
          >
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
            {/* <button>Send</button> */}
            {this.state.status === "SUCCESS" ? <p style={{marginTop: "2%"}}>Successful Submission!</p> : <button>Submit</button>}
            {this.state.status === "ERROR" && <p>Error.  Make sure to fill out all fields.</p>}
          </form>
        </div>

        {/* <Footer /> */}
      </>
    );
  }
}
