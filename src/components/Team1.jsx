import React from "react";

const teamData = [
  {
    name: "John Doe",
    job: "Front-end Developer",
    img: "img/testimonials/01.jpg",
  },
  {
    name: "Jane Smith",
    job: "UI/UX Designer",
    img: "img/testimonials/01.jpg",
  },
  {
    name: "Mike Johnson",
    job: "Back-end Developer",
    img: "img/testimonials/01.jpg",
  },
  // Add more team members as needed
];

export const Team1 = () => {
  return (
    <div id="team1" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {teamData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                <img src={d.img} alt="..." className="team1-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
