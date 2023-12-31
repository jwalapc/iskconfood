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
      <div
        id="contact"
        style={{
          height: "auto", // Adjust this as needed
          overflow: "hidden",
          backgroundAttachment: "fixed",
          width: "auto",
        }}
      >
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 style={{ color: "#ffffff" }}>Get In Touch</h2>
                <p style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold" }}>
                Registered under Maharashtra Public Trust Act 1950 vide Registration No. F-2179 (Bom)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12" style={{ position: "relative", top: "-20px" }}>
            <div className="row">
              <div className="social">
                <ul>
                  
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter" style={{ color: "#1da1f2" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube" style={{ color: "red" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram" style={{ color: "pink" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin" style={{ color: "blue" }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info" style={{ position: "relative", top: "-70px" }}>
            <div className="contact-item">
              <h3 style={{ color: "#ffffff", fontSize: "25px", fontWeight: "bold" }}>Contact Info</h3>
              <p style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>
                <span>
                  <i className="fa fa-map-marker" style={iconStyles}></i> Address
                </span>{" "}
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>
                <span>
                  <i className="fa fa-phone" style={iconStyles}></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>
                <span>
                  <i className="fa fa-envelope-o" style={iconStyles}></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p style={{ color: "black", fontWeight: "bold" }}>
            International Society for Krishna Consciousness (ISKCON) | Founder-Acharya: H.D.G. A.C. Bhaktivedanta Swami Prabhupada
          </p>
        </div>
      </div>
    </div>
  );
};
