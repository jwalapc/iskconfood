import React from "react";

const DonationInfo = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "35px",
    margin: "0",
    padding: "50px",
    FontFace: "lato"
  };

  const textStyle = {
    fontSize: "2rem",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>DONATE FOR A CHILD</h2>
      <p style={textStyle}>
        All Donations paid within India are Tax Exempted under 80G Section of
        Income Tax Department, Govt. of India. AVAIL 80G BENEFITS ON THE
        DONATIONS MADE TO ISKCON AS PER INCOME TAX RULE Tax Exemption
        Certificate Ref. No.: आ. नि. (छू.) मु. न./80-जी/1667/2007/2008-2009
      </p>
    </div>
  );
};

export default DonationInfo;
