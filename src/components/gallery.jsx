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
      original: "https://picsum.photos/id/1018/800/480/",
      thumbnail: "https://picsum.photos/id/1018/200/120/"
    },
    {
      original: "https://picsum.photos/id/1015/800/480/",
      thumbnail: "https://picsum.photos/id/1015/200/120/"
    },
    {
      original: "https://picsum.photos/id/1019/800/480/",
      thumbnail: "https://picsum.photos/id/1019/200/120/"
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
