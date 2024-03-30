import React from "react";
import experience from "./data/experience.json";
import Alright from './data/Images/experience/Alright.jpg'
const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left ex_left">
                  <img src={Alright} alt="" width={100} height={100} />
                </div>
                <div className="right ex_right">
                  <h2 className="ex_heading">{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }} className="ex_heading">
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }} className="ex_heading">{data.location}</span>
                  </h4>
                  <h5 className="ex_heading" style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 className="ex_heading" style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
