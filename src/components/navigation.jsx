import React, { useState } from "react";

export const Navigation = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div
        className="subheader"
        style={{
          backgroundColor: "#007bff",
          color: "#ffffff",
          textAlign: "center",
          position: "relative",
          top: "-20px",
        }}
      >
        <p style={{ padding: "10px" }}>
          The website of ISKCON Food For Child program | Contact: +91 7400056919
          <a
            href="https://facebook.com/iskconannadaan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px", color: "#ffffff" }}
          >
            <i className="fa fa-facebook"></i>{" "}
            {/* Font Awesome Facebook Icon */}
          </a>
          <a
            href="https://www.instagram.com/iskcon.foodforchild"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px", color: "#ffffff" }}
          >
            <i className="fa fa-instagram"></i>{" "}
            {/* Font Awesome Instagram Icon */}
          </a>
        </p>
      </div>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle collapsed ${isCollapsed ? "" : "in"}`}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/logo.JPG" className="logo-image" alt="Logo" />
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "in"}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
            <li>
            <a href="#features" className="btn btn-custom btn-lg page-scroll" style={{borderRadius:"90px",backgroundColor:"#f19812ef",color:"white",fontsize:"10%"}}                onClick={handleNavLinkClick}
>
                        Donate Now
                      </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
