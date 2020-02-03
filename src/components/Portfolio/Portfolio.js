import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// CSS
import "../../styles/styles.css";

const portfolio = props => (
  <React.Fragment>
    <div className="Portfolio">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <p>Portfolio</p>
        </Grid>
      </Grid>
    </div>
  </React.Fragment>
);

export default portfolio;
