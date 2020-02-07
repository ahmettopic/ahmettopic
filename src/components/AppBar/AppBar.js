// React
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

const AppBarStyle = {
  margin: "5px",
  textTransform: "uppercase",
  textDecoration: "none",
  color: "black"
};

class AppBar extends Component {
  render() {
    return (
      <div
        style={{
          height: "6vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#e5e5e5"
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Link style={AppBarStyle} to="/about">
            <StyledParagraph>About</StyledParagraph>
          </Link>

          <Link style={AppBarStyle} to="/skills">
            <StyledParagraph>Skills</StyledParagraph>
          </Link>

          <Link style={AppBarStyle} to="/portfolio">
            <StyledParagraph>Portfolio</StyledParagraph>
          </Link>

          <Link style={AppBarStyle} to="/contact">
            <StyledParagraph>Contact</StyledParagraph>
          </Link>
        </Grid>
      </div>
    );
  }
}

export default AppBar;
