import DetectRTC from "detectrtc";
import React from "react";
import { Link } from "react-router-dom";
import "../Stylings/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* <div
        className={
          !DetectRTC.isMobileDevice ? "home-container" : "home-container-mobile"
        }
      > */}
      <div className="home-container">
        <Link to="/about">
          <div className="home-circle">
            <div className="home-circle-text">About</div>
          </div>
        </Link>
        <Link to="/projects">
          <div className="home-circle">
            <div className="home-circle-text">Projects</div>
          </div>
        </Link>
        <Link to="/resume">
          <div className="home-circle">
            <div className="home-circle-text">Resume</div>
          </div>
        </Link>
        <Link to="/skills">
          <div className="home-circle">
            <div className="home-circle-text">Skills</div>
          </div>
        </Link>
        <Link to="/achievements">
          <div className="home-circle">
            <div className="home-circle-text">Achievements</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
