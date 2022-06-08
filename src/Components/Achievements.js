import React from "react";
import { Link } from "react-router-dom";
import "../Stylings/Achievements.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { achievements } from "../Contents/achievements";
import DetectRTC from "detectrtc";

const Achievements = () => {
  return (
    <div className="achievements-page">
      {!DetectRTC.isMobileDevice && (
        <div className="container">
          <Carousel fade>
            {achievements.map((item, index) => {
              return (
                <Carousel.Item>
                  <div className="card" key={index}>
                    <div className="card-header">{item.header}</div>
                    <ul className="card-description-list">
                      {item.description.map((i, ind) => {
                        return (
                          <li className="card-description" key={ind}>
                            {i.desc}
                          </li>
                        );
                      })}
                      {item.certificates?.map((i, ind) => {
                        return (
                          <Link
                            className="certificate-button"
                            to={i.file}
                            target="_blank"
                            key={ind}
                            download
                          >
                            {i.caption}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      )}
      {DetectRTC.isMobileDevice && (
        <h1 style={{ color: "white" }}>Page being built!</h1>
      )}
    </div>
  );
};

/*
const Achievements = () => {
  return (
    <div className="achievements-page">
      <div className="container">
        <div className="card">
          <div className="card-header">Leadership roles</div>
          <ul className="card-description-list">
            <li className="card-description">
              Played the <b>Team Lead</b> role for the internship projects in
              TASKMONK Technologies. Was responsible for presenting the progress
              to the team mentor with weekly and/or daily updates and overseeing
              feature division and delivery on time
            </li>
            <li className="card-description">
              Team lead in all college projects
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">Achievements</div>
          <ul className="card-description-list">
            <li className="card-description">
              Won best research paper award in{" "}
              <b>
                AIIOT Virtual Conference on Artificial Intelligence for Internet
                of Things
              </b>{" "}
              (April 2022).
            </li>
            <li className="card-description">
              Received Best outgoing student award in school (10th grade)
            </li>
          </ul>
          <Link
            className="certificate-button"
            to={aiiot}
            target="_blank"
            download
          >
            Download AIIOT certificate
          </Link>
        </div>
      </div>
    </div>
  );
};
*/

export default Achievements;
