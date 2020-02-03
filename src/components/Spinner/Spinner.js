import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";

const spinner = () => (
  <div className="Spinner">
    <Grid container direction="row" justify="center" alignItems="center">
      <p>LOADING</p>
    </Grid>
  </div>
);

export default spinner;
