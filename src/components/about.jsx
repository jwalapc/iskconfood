import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="about-section">
      <div className="container about-container">
        <div className="row">
          <div className="col-md-6">
            <div id="about-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/portfolio/pic8.jpg"
                    className="d-block w-100"
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/portfolio/pic1.jpg"
                    className="d-block w-100"
                    alt="Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/portfolio/pic2.jpg"
                    className="d-block w-100"
                    alt="Image 3"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#about-carousel"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#about-carousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h2 className="about-heading">About Us</h2>
              <h3 className="sub-heading">Brief History</h3>

              <p className="about-paragraph">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3 className="sub-heading">Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="why-list">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="why-list">
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="sub-heading">The Mission</h3>
            <p className="about-paragraph">
              {props.data ? props.data.paragraph1 : "loading..."}
            </p>
          </div>
          <div className="col-md-6">
            <div className="mission-image">
              <img
                src="img/portfolio/pic8.jpg"
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
