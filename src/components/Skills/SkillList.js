import React, { Component } from "react";
// Components
import Skill from "./Skill";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Icons
import {
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
  DiNodejsSmall,
  DiBootstrap,
  DiSass
} from "react-icons/di";

class SkillsList extends Component {
  state = {
    skills: [
      { name: "JavaScript", icon: <DiJavascript1 size={50} color="#F0DD3E" /> },
      { name: "ReactJS", icon: <DiReact size={50} color="#4AD5FE" /> },
      { name: "jQuery", icon: <DiJqueryLogo size={50} color="#78CFF5" /> },
      { name: "NodeJS", icon: <DiNodejsSmall size={50} color="#5BA34A" /> },
      { name: "Bootstrap", icon: <DiBootstrap size={50} color="#7843C4" /> },
      { name: "Sass", icon: <DiSass size={50} color="#CF649A" /> }
    ]
  };

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        {this.state.skills.map((skill, id) => {
          return <Skill key={id} icon={skill.icon} name={skill.name}></Skill>;
        })}
      </Grid>
    );
  }
}

export default SkillsList;
