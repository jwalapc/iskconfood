import React from "react";

const Subheader = () => {
  return (
    <div className="subheader" style={subheaderStyle}>
      <div className="container text-center">
        <p style={subheaderTextStyle}>
          The website of ISKCON Food For Child program | Contact:{" "}
          <a
            href="tel:+917400056919"
            style={subheaderLinkStyle}
          >
            +91 7400056919
          </a>
          <a
            href="https://facebook.com/iskconannadaan"
            target="_blank"
            rel="noopener noreferrer"
            style={subheaderLinkStyle}
          >
            <i className="fa fa-facebook"></i>{" "}
            {/* Font Awesome Facebook Icon */}
          </a>
          <a
            href="https://www.instagram.com/iskcon.foodforchild"
            target="_blank"
            rel="noopener noreferrer"
            style={subheaderLinkStyle}
          >
            <i className="fa fa-instagram"></i>{" "}
            {/* Font Awesome Instagram Icon */}
          </a>
        </p>
      </div>
    </div>
  );
};

const subheaderStyle = {
  backgroundColor: "#007bff",
  color: "#ffffff",
  position: "relative",
  top: "-20px",
};

const subheaderTextStyle = {
  padding: "10px",
};

const subheaderLinkStyle = {
  marginLeft: "10px",
  color: "#ffffff",
};

export default Subheader;
