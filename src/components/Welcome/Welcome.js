import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";
import StyledHeading from "../../styles/StyledHeading";

const welcome = props => {
  return (
    <StyledDiv
      style={{ height: "25vh", alignItems: "center", textAlign: "center" }}
    >
      <Grid container direction="row">
        <Grid item xs>
          <StyledHeading>Portfolio</StyledHeading>
          <StyledParagraph>
            Ahmet Topic / Full Stack Web Developer
          </StyledParagraph>
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

export default welcome;
