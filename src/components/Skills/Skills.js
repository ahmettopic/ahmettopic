import React, { Component } from "react";
// CSS
import "./Skills.css";

class skill extends Component {
  state = {
    skills: [
      { LangName: "Languages", languages: "JavaScript HTML CSS" },
      { FrameName: "Frameworks", frameworks: "ReactJS NodeJS" },
      { ToolName: "Tools", tools: "Firebase AdobeXD Photoshop" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.skills.map(skill => {
          return (
            <div className="skills">
              <div>
                <h1>{skill.LangName}</h1>
                <p>{skill.languages}</p>
              </div>
              <div>
                <h1>{skill.FrameName}</h1>
                <p>{skill.frameworks}</p>
              </div>
              <div>
                <h1>{skill.ToolName}</h1>
                <p>{skill.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default skill;
