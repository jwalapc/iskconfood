import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleryStyle = {
  maxWidth: "900px", // Adjust the maximum width as needed
  margin: "0 auto", // Center-align the gallery horizontally
};

export const Gallery = () => {
  const images = [
    {
      original: "img/portfolio/pic1.jpg",
      thumbnail: "img/portfolio/pic1.jpg"
    },
    {
      original: "img/portfolio/pic2.jpg",
      thumbnail: "img/portfolio/pic2.jpg"
    },
    // {
    //   original: "img/portfolio/pic3.jpg",
    //   thumbnail: "img/portfolio/pic3.jpg"
    // },
    // {
    //   original: "img/portfolio/pic4.jpg",
    //   thumbnail: "img/portfolio/pic4.jpg"
    // },
    {
      original: "img/portfolio/pic5.jpg",
      thumbnail: "img/portfolio/pic5.jpg"
    },
    {
      original: "img/portfolio/pic6.jpg",
      thumbnail: "img/portfolio/pic6.jpg"
    },
    {
      original: "img/portfolio/pic7.jpg",
      thumbnail: "img/portfolio/pic7.jpg"
    },
    {
      original: "img/portfolio/pic8.jpg",
      thumbnail: "img/portfolio/pic8.jpg"
    }
  ];

  return (
    <div id="portfolio" style={galleryStyle}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: "black" }}>Gallery</h1>
      <ImageGallery
        items={images}
        showPlayButton={true}
        autoPlay={true}
        slideDuration={1000}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          // Your play function logic here
        }}
      />
    </div>
  );
};
