import React, { Component } from "react";
// CSS
import "./Skills.css";
// Axios
import axios from "../../axios-data";

class Skills extends Component {
  state = {
    skills: [
      { LangName: "Languages", languages: "JavaScript HTML CSS" },
      { FrameName: "Frameworks", frameworks: "ReactJS NodeJS" },
      { ToolName: "Tools", tools: "Firebase AdobeXD Photoshop" }
    ]
  };

  componentDidMount() {
    axios.get("https://ahmettopic-4ff91.firebaseio.com/data").then(response => {
      this.setState({ data: response.data });
    });
  }

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

export default Skills;
