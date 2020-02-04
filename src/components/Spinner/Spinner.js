import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
import StyledParagraph from "../../styles/StyledParagraph";

const spinner = () => (
  <div>
    <Grid container direction="row" justify="center" alignItems="center">
      <StyledParagraph>LOADING</StyledParagraph>
    </Grid>
  </div>
);

export default spinner;
