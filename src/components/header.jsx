import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component

export const Header = (props) => {
  const images = [
    "img/portfolio/is111.jpg",
    "img/portfolio/pic2.jpg",
    "img/portfolio/pic3.jpg",
    // Add more image URLs here
  ];

  return (
    <header
      id="header"
      style={{
        height: "80vh",
        overflow: "hidden",
        backgroundAttachment: "fixed",
      }}
    >
      <Carousel
        showArrows={true} // Optionally, you can hide navigation arrows
        showStatus={false} // Optionally, you can hide the image status
        showIndicators={false} // Optionally, you can hide image indicators
        infiniteLoop={true} // Enable infinite looping
        autoPlay={true} // Enable auto play
        useKeyboardArrows={true} // Enable keyboard navigation
        customTransition="all .1" // Transition duration
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="intro"
              style={{
                background: `url(${image}) center center no-repeat`,
                backgroundSize: "cover", // Cover the entire background
                overflow: "hidden", // Hide overflowing content
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1>
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                      </h1>
                      <p>{props.data ? props.data.paragraph : "Loading"}</p>
                      <a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                      >
                        Donate Now
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </Carousel>
    </header>
  );
};
