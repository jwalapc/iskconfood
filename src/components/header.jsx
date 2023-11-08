import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  const imageUrls = [
    "img/portfolio/ind1.jpg", // Change this to your image URLs
    "img/portfolio/ind2.jpg", // Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Use a timer to change the background image at a specific interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change the image every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

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
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "16px", // Adjust the font size as needed
    marginBottom: "20px", // Add margin for spacing on smaller screens
    width: "200px", // Adjust width as needed
    position: "relative",
    top: "10px",
  };

  return (
    <div>
      <div style={headerStyle}>
        <div style={{ width: "50%", maxWidth: "800px" }}>
          {/* You can remove the Carousel component */}
        </div>
      </div>
      <a href="#donate" className="btn btn-custom btn-sm page-scroll" style={buttonStyle}>
        Donate Now
      </a>
    </div>
  );
};

export default Header;
