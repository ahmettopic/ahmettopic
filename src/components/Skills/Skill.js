import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";

const SkillItem = {
  width: "120px",
  margin: "12px 6px"
};

const skill = props => {
  return (
    <StyledDiv style={{ textAlign: "center" }}>
      <Grid item xs>
        <div style={SkillItem}>
          {props.icon}
          <StyledParagraph>{props.name}</StyledParagraph>
        </div>
      </Grid>
    </StyledDiv>
  );
};
export default skill;
