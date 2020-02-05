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
  DiMongodb,
  DiNpm,
  DiGit,
  DiVisualstudio,
  DiHtml5,
  DiCss3,
  DiLess,
  DiIllustrator,
  DiPhotoshop,
  DiNodejsSmall,
  DiBootstrap,
  DiSass
} from "react-icons/di";

import { FaDocker } from "react-icons/fa";
import { AiOutlineFire, AiFillGithub } from "react-icons/ai";

class SkillsList extends Component {
  state = {
    skills: [
      { name: "JavaScript", icon: <DiJavascript1 size={60} color="#F0DD3E" /> },
      { name: "ReactJS", icon: <DiReact size={60} color="#4AD5FE" /> },
      { name: "Firebase", icon: <AiOutlineFire size={60} color="#F7C62E" /> },
      { name: "jQuery", icon: <DiJqueryLogo size={60} color="#78CFF5" /> },

      { name: "NodeJS", icon: <DiNodejsSmall size={60} color="#5BA34A" /> },
      { name: "MongoDB", icon: <DiMongodb size={60} color="#66AD3E" /> },
      { name: "NPM", icon: <DiNpm size={60} color="#C53635" /> },
      { name: "Docker", icon: <FaDocker size={60} color="#0998E6" /> },

      { name: "Git", icon: <DiGit size={60} color="#E94F32" /> },
      { name: "GitHub", icon: <AiFillGithub size={60} color="#24282E" /> },
      { name: "VSCODE", icon: <DiVisualstudio size={60} color="#48AAEC" /> },
      { name: "HTML", icon: <DiHtml5 size={60} color="#0181C1" /> },

      { name: "CSS", icon: <DiCss3 size={60} color="#ED7531" /> },
      { name: "Bootstrap", icon: <DiBootstrap size={60} color="#7843C4" /> },
      { name: "Sass", icon: <DiSass size={60} color="#C76495" /> },
      { name: "Less", icon: <DiLess size={60} color="#1F466F" /> },
      {
        name: "Illustrator",
        icon: <DiIllustrator size={60} color="#F87900" />
      },
      { name: "Photoshop", icon: <DiPhotoshop size={60} color="#00C3F8" /> }
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
