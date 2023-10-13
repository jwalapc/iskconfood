import React from "react";

export const About = (props) => {
  const containerStyle = {
    padding: "30px 0",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center", // Center align the heading

  };

  const subHeadingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "30px",
  };

  const paragraphStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div id="about" className="about-section" style={containerStyle}>
      <div className="container about-container">
        <div className="row">
          <div className="col-md-12">
            <div className="about-text">
              <h2 className="about-heading" style={headingStyle}>About Us</h2>
              <p className="about-paragraph" style={paragraphStyle}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="img/portfolio/pic1.jpg"
              alt="About Us"
              style={imageStyle}
            />
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h3 className="sub-heading" style={subHeadingStyle}>Mission</h3>
              <p className="about-paragraph" style={paragraphStyle}>
                {props.data ? props.data.paragraph1 : "loading..."}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              {/* <h3 className="sub-heading" style={subHeadingStyle}>Right Data</h3> */}
              <p className="about-paragraph" style={paragraphStyle}>
                {props.data ? props.data.paragraph2 : "loading..."}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="img/portfolio/pic2.jpg"
              alt="About Us"
              style={imageStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
