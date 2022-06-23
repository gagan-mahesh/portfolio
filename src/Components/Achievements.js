import React, { useState } from "react";
import "../Stylings/Achievements.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import DetectRTC from "detectrtc";
import { Button } from "react-bootstrap";
import { ACHIEVEMENTS, CERTIFICATES } from "../Contents/Constants/constants";
import aiiot from "../Contents/aiiot.pdf";

const Achievements = () => {
  const [screenName, setScreenName] = useState(ACHIEVEMENTS);

  const desktopDisplay = () => {
    return (
      <Carousel className="carousel" fade>
        {screenName === ACHIEVEMENTS && (
          <Carousel.Item>
            <div className="project-card">
              <div className="card-header">ACHIEVEMENTS</div>
              <div className="card-project-description">
                <br></br>
                <ul className="card-description-list">
                  <li className="card-description">
                    <React.Fragment>
                      Was the <b>Team Lead</b> for the internship projects in
                      TASKMONK Technologies. Was responsible for presenting the
                      progress to the team mentor with weekly and/or daily
                      updates and overseeing feature division and delivery on
                      time
                    </React.Fragment>
                  </li>
                  <li className="card-description">
                    <React.Fragment>
                      Won best research paper award in{" "}
                      <b>
                        AIIOT Virtual Conference on Artificial Intelligence for
                        Internet of Things
                      </b>{" "}
                      (April 2022).
                      <br />
                      <a
                        className="certificate-button"
                        download
                        href={aiiot}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download AIIOT certificate
                      </a>
                    </React.Fragment>
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        )}
        {screenName === CERTIFICATES && (
          <Carousel.Item>
            <div className="project-card">
              <div className="card-header">CERTIFICATES</div>
              <div className="card-project-description">
                <div className="card-company">LINUX SYSTEM ADMIN</div>
                <br></br>
                <ul className="card-description-list">
                  <li className="card-description">
                    <React.Fragment>
                      <b>Linux Command Line Certification</b>
                      <br />
                      <a
                        className="certificate-button"
                        download
                        href="https://www.linkedin.com/learning/certificates/49255db2c7fcd94422d9ae71fb653d69c461e1ff3957f6782a0c796021d481c5?trk=share_certificate"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View certificate
                      </a>
                    </React.Fragment>
                  </li>
                  <li className="card-description">
                    <React.Fragment>
                      <b>Linux Files and Permissions Certification</b>
                      <br />
                      <a
                        className="certificate-button"
                        download
                        href="https://www.linkedin.com/learning/certificates/e2249069838bbb659a1e71e4142457a909cdccc1755cf8d6d37b0ccc53292b46?trk=share_certificate"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View certificate
                      </a>
                    </React.Fragment>
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        )}
        );
      </Carousel>
    );
  };

  return (
    <div className="projects-page">
      <h1 className="page-header">Achievements/Certificates</h1>
      <div className="primary-button-container">
        <div className="button-container">
          <Button
            variant="light"
            className="main-buttons"
            onClick={() => {
              setScreenName(ACHIEVEMENTS);
            }}
          >
            Achievements
          </Button>
        </div>
        <div className="button-container">
          <Button
            variant="light"
            className="main-buttons"
            onClick={() => {
              setScreenName(CERTIFICATES);
            }}
          >
            Certificates
          </Button>
        </div>
      </div>

      {/* DESKTOP DEVICE UI */}
      {!DetectRTC.isMobileDevice && (
        <div className="project-container">{desktopDisplay()}</div>
      )}
    </div>
  );
};

export default Achievements;
