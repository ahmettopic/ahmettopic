import React from "react";
// Styles
import "../../styles/styles.css";
// Material Grid
import Grid from "@material-ui/core/Grid";

const skill = props => {
  return (
    <div className="SkillItem">
      <Grid item>
        <div>{props.icon}</div>
        <p>{props.name}</p>
      </Grid>
    </div>
  );
};
export default skill;
