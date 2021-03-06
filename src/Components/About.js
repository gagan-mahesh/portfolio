import React, { useState } from "react";
import "../Stylings/About.css";
import photo2 from "../Stylings/photo2.jpg";
import { workExperience } from "../Contents/workExperience";
import DetectRTC from "detectrtc";

const About = () => {
  const [showPreviousExpFlag, setPreviousExpFlag] = useState(true);

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-body-container">
          <div className="about-body-header">
            <span className="about-body-header-text">About Me</span>
          </div>
          <div className="about-description-container">
            <div className="about-description">
              {workExperience.aboutDescription}
            </div>
            <span className="about-body-logo">
              <img className="about-body-logo-content" src={photo2} alt="" />
            </span>
          </div>
          {!DetectRTC.isMobileDevice && (
            <button
              className="about-previous-exp-button"
              onClick={() => {
                setPreviousExpFlag(!showPreviousExpFlag);
              }}
            >
              Show/Hide Previous experiences
            </button>
          )}
          {showPreviousExpFlag && !DetectRTC.isMobileDevice && (
            <div className="about-cards-container">
              {workExperience.experience.map((item, index) => (
                <div>
                  <div className="about-workexp-container" key={index}>
                    <div className="company-box">
                      <span>{item.companyName}</span>
                      <span className={item.logo} />
                    </div>
                    <div className="about-workexp-date-container">
                      <p className="about-workexp-date">
                        {item.startDate} : {item.endDate}{" "}
                      </p>
                    </div>
                    <p className="about-workexp-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {DetectRTC.isMobileDevice && (
            <div>
              {workExperience.experience.map((item, index) => (
                <div className="about-workexp-mobile-container">
                  <span style={{ fontWeight: 600 }}>{item.companyName}</span>
                  <span className={item.logo} />
                  <p className="about-workexp-date">
                    {item.startDate} : {item.endDate}{" "}
                  </p>
                  <p className="about-workexp-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
