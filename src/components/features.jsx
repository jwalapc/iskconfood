import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Donate for a Child</h2>
          <h3>
            All Donations paid within India are Tax Exempted under 80/G Section of Income Tax Department, Govt. of India. AVAIL 80G BENEFITS ON THE DONATIONS MADE TO ISKCON AS PER INCOME TAX RULE Tax Exemption Certificate Ref. No.: आ. नि. (छू.) मु. न./80-जी/1667/2007/2008-2009
          </h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3">
                  <div className="feature-item" style={{ textAlign: "center" }}>
                    <div className="feature-image" style={{ backgroundImage: `url("${d.backgroundImage}")` }}>
                      <i className={d.icon}></i>
                    </div>
                    <h3 style={{ fontFamily: "Your Desired Font", fontSize: "24px",  fontWeight: "bold" }}>{d.title}</h3>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>{d.text}</p>
                    <a href={d.donateLink} className="btn btn-custom btn-lg page-scroll">
                      Donate Now
                    </a>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
