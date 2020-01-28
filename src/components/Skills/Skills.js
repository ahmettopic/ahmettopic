import React, { Component } from "react";
// JSON Data
import skills from "../../data/skills.json";

import "../../styles/styles.css";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Skills">
          {skills.map((skills, id) => {
            return (
              <div key={id} className="Title">
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
