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
          <Grid item xs={12}>
            <p>
              New <u>release</u> is finally deployed!
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
