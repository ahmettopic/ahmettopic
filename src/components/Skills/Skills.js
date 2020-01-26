import React, { Component } from "react";
// JSON Data
import skills from "../../data/skills.json";

import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Skills">
          <h1>Skills</h1>
          {skills.map((skills, index) => {
            return (
              <div className="Title">
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
