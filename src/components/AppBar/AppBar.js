// React
import React from "react";
import { Link } from "react-router-dom";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";

function AppBar() {
  const AppBarStyle = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "black",
    margin: "5px"
  };

  return (
    <StyledDiv style={{ height: "5vh" }}>
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
    </StyledDiv>
  );
}

export default AppBar;
