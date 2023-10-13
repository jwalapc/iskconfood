import React from 'react';

export const Team = () => {
  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px',
  };

  const iframeContainerStyle = {
    width: '100%',
    position: 'relative',
    paddingBottom: '75%', // Adjust the aspect ratio (e.g., 75% for a 4:3 aspect ratio)
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <div id="faq" className="block faqBlock" style={containerStyle}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
        </div>
        <div style={iframeContainerStyle}>
          <iframe
            title="PDF Viewer"
            src="img/portfolio/sample.pdf" // Replace with the URL to your PDF file
            style={iframeStyle} // Apply the responsive style
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
