import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// CSS
import "../../styles/styles.css";

const contact = props => (
  <React.Fragment>
    <div className="Contact">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <p>Contact</p>
        </Grid>
      </Grid>
    </div>
  </React.Fragment>
);

export default contact;
