import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Stylings/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  portfolio_internship as portfolio,
  portfolio_college as college,
  portfolio_personal as personal,
} from "../Contents/portfolio";
import { INTERNSHIP, COLLEGE, PERSONAL } from "../Contents/Constants/constants";
import DetectRTC from "detectrtc";

const Portfolio = () => {
  const [screenName, setScreenName] = useState(null);

  const mobileDisplay = (item, index) => {
    return (
      <div className="about-workexp-mobile-container" key={index}>
        <span style={{ fontWeight: 600, fontSize: 20 }}>{item.company}</span>
        <p className="project-title-mobile-description">
          {item.project.title}
          <br></br>
          <ul className="project-card-list-mobile">
            {item.project.desc.map((i) => {
              return <li className="project-card-desc-mobile">{i.item}</li>;
            })}
          </ul>
          {item.project.reference ? item.project.reference : ""}
        </p>
      </div>
    );
  };

  const desktopDisplay = () => {
    const constantObjectMapping = {
      INTERNSHIP: portfolio,
      COLLEGE: college,
      PERSONAL: personal,
    };
    if (screenName && constantObjectMapping[screenName]?.length > 0) {
      return (
        <Carousel className="carousel" fade>
          {constantObjectMapping[screenName].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="project-card">
                  <div className="card-header">{item.category}</div>
                  <div className="card-company">{item.company}</div>
                  <div className="card-project-description">
                    {item.project.title}
                    <br></br>
                    <ul className="card-description-list">
                      {item.project.desc.map((i) => {
                        return <li className="card-description">{i.item}</li>;
                      })}
                    </ul>
                    {item.project.reference ? item.project.reference : ""}
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    }
    return <></>;
  };

  return (
    <div className="projects-page">
      <h1 className="page-header">Projects</h1>
      <div className="primary-button-container">
        <div className="button-container">
          <Button
            variant="light"
            className="main-buttons"
            onClick={() => {
              setScreenName(INTERNSHIP);
            }}
          >
            Internship
          </Button>
        </div>
        <div className="button-container">
          <Button
            variant="light"
            className="main-buttons"
            onClick={() => {
              setScreenName(COLLEGE);
            }}
          >
            College
          </Button>
        </div>
        <div className="button-container">
          <Button
            variant="light"
            className="main-buttons"
            onClick={() => {
              setScreenName(PERSONAL);
            }}
          >
            Personal
          </Button>
        </div>
      </div>

      {/* MOBILE DEVICE UI */}
      {DetectRTC.isMobileDevice && (
        <>
          {screenName === INTERNSHIP &&
            portfolio?.map((item, index) => {
              return mobileDisplay(item, index);
            })}
          {screenName === COLLEGE &&
            college?.map((item, index) => {
              return mobileDisplay(item, index);
            })}
          {screenName === PERSONAL &&
            personal?.map((item, index) => mobileDisplay(item, index))}
        </>
      )}

      {/* DESKTOP DEVICE UI */}
      {!DetectRTC.isMobileDevice && (
        <div className="project-container">{desktopDisplay()}</div>
      )}
    </div>
  );
};

export default Portfolio;
