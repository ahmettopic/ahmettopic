import React, { Component } from "react";
// JSON Data
import data from "../../data/data.json";

import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Skills">
          <h1>Skills</h1>
          {data.map((skillDetail, index) => {
            return (
              <div className="Title">
                <p>{skillDetail.title}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
