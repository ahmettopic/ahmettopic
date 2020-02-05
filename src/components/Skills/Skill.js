import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

const SkillItem = {
  margin: "12px 6px",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center"
};

const skill = props => {
  return (
    <Grid item xs={4} sm={2}>
      <div style={SkillItem}>{props.icon}</div>
      <div style={SkillItem}>
        <StyledParagraph>{props.name}</StyledParagraph>
      </div>
    </Grid>
  );
};
export default skill;
