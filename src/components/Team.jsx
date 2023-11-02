import React from 'react';

export const Team = () => {
  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px',
  };

  const pdfURL = 'img/portfolio/sample.pdf'; // Replace with the URL to your PDF file

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
    width: '180px',
    border: '2px solid #007BFF',
    borderRadius: '10px',
    backgroundColor: '#007BFF',
    cursor: 'pointer', // Add cursor pointer to make it look clickable
  };

  const buttonStyle = {
    fontSize: '25px',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div id="faq" className="block faqBlock" style={containerStyle}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 style={{ textAlign: 'center' }}>Why we do what we do?</h2>
        </div>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={buttonContainerStyle}
            onClick={() => {
              // Redirect to the PDF URL when the box is clicked
              window.location.href = pdfURL;
            }}
          >
            <a href={pdfURL} download="sample.pdf" style={buttonStyle}>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
