import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Stylings/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  portfolio_internship as portfolio,
  portfolio_college as college,
} from "../Contents/portfolio";
import { INTERNSHIP, COLLEGE, PERSONAL } from "../Contents/Constants/constants";

const Portfolio = () => {
  const [screenName, setScreenName] = useState(null);

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

      <div className="project-container">
        {screenName === INTERNSHIP && (
          <Carousel className="carousel" fade>
            {portfolio.map((item, index) => {
              return (
                <Carousel.Item>
                  <div className="project-card">
                    <div className="card-header">{item.category}</div>
                    <div className="card-company">{item.company}</div>
                    <div className="card-project-description">
                      {item.project.title}
                      <br></br>
                      <ul className="card-description-list">
                        {item.project.desc.map((i, k) => {
                          return <li className="card-description">{i.item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
        {screenName === COLLEGE && (
          <Carousel className="carousel" fade>
            {college.map((item, index) => {
              return (
                <Carousel.Item>
                  <div className="project-card">
                    <div className="card-header">{item.category}</div>
                    <div className="card-company">{item.company}</div>
                    <div className="card-project-description">
                      {item.project.title}
                      <br></br>
                      <ul className="card-description-list">
                        {item.project.desc.map((i, k) => {
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
        )}
      </div>
    </div>
  );
};

export default Portfolio;
