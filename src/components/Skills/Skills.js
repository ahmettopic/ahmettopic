import React, { Component } from "react";
// JSON Data
import skills from "../../data/skills.json";

import "../../styles/styles.css";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Skills">
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
