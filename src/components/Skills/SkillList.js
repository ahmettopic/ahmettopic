import React, { Component } from "react";
// Components
import Skill from "./Skill";
// Styles
import "../../styles/styles.css";

class SkillsList extends Component {
  state = {
    skills: [
      { name: "JavaScript" },
      { name: "ReactJS" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "jQuery" },
      { name: "NodeJS" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="SkillList">
          <ul>
            {this.state.skills.map(skill => {
              return <Skill>{skill.name}</Skill>;
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SkillsList;
