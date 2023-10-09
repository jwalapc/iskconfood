import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Define CSS styles for the form and icons
  const formStyles = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "none",
    borderBottom: "2px solid #f19812ef",
    fontSize: "18px",
  };

  const labelStyles = {
    display: "block",
    fontWeight: "bold",
  };

  const iconStyles = {
    fontSize: "24px",
    color: "#f19812ef",
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 style={{ color: "#ffffff" }}>Get In Touch</h2>
                <p style={{ color: "#ffffff", fontSize: "25px", fontWeight: "bold" }}>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
                style={formStyles}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" style={labelStyles}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                        style={inputStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" style={labelStyles}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                        onChange={handleChange}
                        style={inputStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={labelStyles}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                    style={inputStyles}
                  ></textarea>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={{ color: "#ffffff", fontSize: "25px", fontWeight: "bold" }}>Contact Info</h3>
              <p style={{ color: "#ffffff", fontWeight: "bold" ,fontSize: "20px"}}>
                <span>
                  <i className="fa fa-map-marker" style={iconStyles}></i> Address
                </span>{" "}
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ color: "#ffffff", fontWeight: "bold" ,fontSize: "20px"}}>
                <span>
                  <i className="fa fa-phone" style={iconStyles}></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ color: "#ffffff", fontWeight: "bold",fontSize: "20px" }}>
                <span>
                  <i className="fa fa-envelope-o" style={iconStyles}></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook" style={{ color: "#1877f2" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter" style={{ color: "#1da1f2" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-whatsapp" style={{ color: "green" }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p style={{ color: "black", fontWeight: "bold" }}>
            International Society for Krishna Consciousness (ISKCON) | Founder-Acharya: HDG A.C Bhaktivedanta Swami Prabhupada
          </p>
        </div>
      </div>
    </div>
  );
};
