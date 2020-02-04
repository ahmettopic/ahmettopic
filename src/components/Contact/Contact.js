import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";

const contact = props => (
  <StyledDiv>
    <Grid container direction="row">
      <Grid item>
        <StyledParagraph>Contact</StyledParagraph>
      </Grid>
    </Grid>
  </StyledDiv>
);

export default contact;
