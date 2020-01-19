import React, { Component } from "react";
// Grid
import Grid from "@material-ui/core/Grid";
// CSS
import "./Background.css";

class Background extends Component {
  render() {
    return (
      <div className="Background">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <div className="Background" style={{ margin: 0 }}>
              <p></p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Background;
