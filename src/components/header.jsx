import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Header = (props) => {
  const images = [
    "img/portfolio/pic3.jpg",
    // Add more image URLs here
  ];

  return (
    <header id="header" style={{ overflow: "hidden",height: "75vh"}}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        customTransition="all .5"
        transitionDuration={1000}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={true}
        dynamicHeight={false}
        showThumbs={false} 
        style={{ overflow: "hidden",height: "84vh"}}
          
        
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="intro"
              style={{
                background: `url(${image}) center center no-repeat`,
                backgroundSize: "cover", // Use "cover" for responsive background image size
                overflow: "hidden", // Changed to "hidden" for a cleaner look
                minHeight: "100vh", // Use "100vh" for full viewport height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                imageRendering: "-webkit-optimize-contrast",
                maxWidth: "100vw",


                
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
                      <a href="#features" className="btn btn-custom btn-lg page-scroll">
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
