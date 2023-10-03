import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container" >
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon1} style={{ backgroundImage: 'url("img/portfolio/is111.jpg")', backgroundSize: 'cover' }}></i>
                  <i className={d.icon2} style={{ backgroundImage: 'url("img/portfolio/is111.jpg")', backgroundSize: 'cover' }}></i>
                  <i className={d.icon3} style={{ backgroundImage: 'url("img/portfolio/is111.jpg")', backgroundSize: 'cover' }}></i>
                  <i className={d.icon4} style={{ backgroundImage: 'url("img/portfolio/is111.jpg")', backgroundSize: 'cover' }}></i>


                  <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Donate Now
                </a>{" "}  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
