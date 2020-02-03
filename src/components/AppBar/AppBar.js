// React
import React from "react";
import { Link } from "react-router-dom";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styles
import "../../styles/styles.css";

function AppBar() {
  return (
    <React.Fragment>
      <div className="AppBar">
        <Grid container direction="row" justify="center" alignItems="center">
          <Link to="/about">
            <p>About</p>
          </Link>

          <Link to="/skills">
            <p>Skills</p>
          </Link>

          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>

          <Link to="/blog">
            <p>Blog</p>
          </Link>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default AppBar;
