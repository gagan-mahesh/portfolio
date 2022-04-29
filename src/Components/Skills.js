import React from "react";
import { skills } from "../Contents/skills";
import "../Stylings/Skills.css";

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="skills-header">Skills</div>
        <div className="skills-item-container">
          {skills.map((item, index) => {
            return (
              <div key={index} className="skills-item">
                <div className="skills-item-text">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills-footer">
        <div className="skills-footer-text">
          This section describes all the technologies, languages and libraries I
          am using, or have previously used, in my projects
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
