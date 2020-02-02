import React, { Component } from "react";
// CSS
import "../../styles/styles.css";
// JSON Data
import about from "./about.json";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="About">
          {about.map((about, id) => {
            return (
              <div key={id} className="Image">
                <p>{about.lead_1}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
