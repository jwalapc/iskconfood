import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  const imageUrls = [
    "img/portfolio/ind1.jpg", // Change this to your image URLs
    "img/portfolio/ind2.jpg", // Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${imageUrls[currentIndex]})`,
  };

  const buttonStyle = {
    display: "block",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "20px", // Add margin for spacing on smaller screens
  };

  return (
    <div style={headerStyle}>
      <div style={{ width: "50%", maxWidth: "800px" }}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          selectedItem={currentIndex}
          onChange={handleCarouselChange}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <a href="#donate" className="btn btn-custom btn-lg page-scroll" style={buttonStyle}>
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Header;
