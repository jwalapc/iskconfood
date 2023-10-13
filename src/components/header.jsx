import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
        height: "82vh",
        overflow: "hidden",
        backgroundAttachment: "fixed",
      }}
    >
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        customTransition="all .1"
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="intro"
              style={{
                background: `url(${image}) center center no-repeat`,
                backgroundSize: "cover",
                overflow: "hidden",
                height: "80vh",
                position: "relative",
                bottom: "-100px",                
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1  style={{position:"relative",top:"-140px"}}>
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                      </h1>
                      <p>{props.data ? props.data.paragraph : "Loading"}</p>
                      <a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                        style={{position:"relative",top:"-190px"}}>
                        Donate Now
                      </a>
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
