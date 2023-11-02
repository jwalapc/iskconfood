import React from "react";
import DonationInfo from "./DonatTitle"; // Fix the import

export const Features = (props) => {
  return (
    <div>
      <DonationInfo /> {/* Include DonationInfo component here */}
      <div id="features" className="text-center">
        <div className="container">
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3">
                    <div className="feature-item" style={{ textAlign: "center", padding: "20px" }}>
                      <div className="feature-image" style={{ backgroundImage: `url("${d.backgroundImage}")` }}>
                        <i className={d.icon}></i>
                      </div>
                      <h3 style={{ fontFamily: "Your Desired Font", fontSize: "18px", fontWeight: "bold" }}>
                        {d.title}
                      </h3>
                      <p style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>{d.text}</p>
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
    </div>
  );
};
