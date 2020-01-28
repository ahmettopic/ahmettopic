import React, { Component } from "react";
// CSS
import "../../styles/styles.css";
// Picture
import Portrait from "../../assets/portrait_1.png";
// JSON Data
import about from "../../data/about.json";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="About">
          {about.map((about, index) => {
            return (
              <React.Fragement>
                <div>
                  <p>{about.lead_1}</p>
                  <img src={Portrait} alt="Portrait" style={{ width: "70%" }} />
                </div>
              </React.Fragement>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
