import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styles
import "../../styles/styles.css";

class SnackBar extends Component {
  render() {
    return (
      <div className="SnackBar">
        <Grid container direction="row" justify="center" alignItems="center">
          <p>Release 2.0 is finally here!</p>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
