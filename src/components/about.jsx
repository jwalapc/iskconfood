import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

export const About = (props) => {
  const containerStyle = {
    padding: "30px 0",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
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

  const carouselImages = [
    "img/portfolio/pic1.jpg",
    "img/portfolio/pic2.jpg",
    // Add more image paths here as needed
  ];
  const carouselImages1 = [
    "img/portfolio/pic6.jpg",
    "img/portfolio/pic7.jpg",
    // Add more image paths here as needed
  ];

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
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} customTransition="all .1" autoPlay={true}>
              {carouselImages.map((imagePath, index) => (
                <div key={index}>
                  <img src={imagePath} alt={`Image ${index}`} style={imageStyle} />
                </div>
              ))}
            </Carousel>
            
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h3 className="sub-heading" style={subHeadingStyle}>Mission</h3>
              <p className="about-paragraph" style={paragraphStyle}>
                {props.data ? props.data.paragraph1 : "loading..."}
              </p>
            </div>
            
          </div>
          <div className="col-md-6">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} customTransition="all .1" autoPlay={true}>
              {carouselImages1.map((imagePath, index) => (
                <div key={index}>
                  <img src={imagePath} alt={`Image ${index}`} style={imageStyle} />
                </div>
              ))}
            </Carousel>
          </div>
            </div>
         </div>
      </div>
    
  );
};
