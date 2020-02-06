import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";
import StyledHeading from "../../styles/StyledHeading";

const welcome = props => {
  return (
    <div
      style={{
        height: "20vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <Grid container direction="row">
        <Grid item xs={12}>
          <StyledHeading>Portfolio</StyledHeading>
          <StyledParagraph>
            Ahmet Topic / Full Stack Web Developer / Web Designer
          </StyledParagraph>
        </Grid>
      </Grid>
    </div>
  );
};

export default welcome;
