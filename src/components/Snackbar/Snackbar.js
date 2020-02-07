import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

class SnackBar extends Component {
  render() {
    const Emoji = props => (
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
        {props.symbol}
      </span>
    );
    return (
      <div
        style={{
          backgroundColor: "#dd4444",
          height: "5vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12}>
            <StyledParagraph>
              GitHub
              <a
                style={{
                  textDecoration: "underline",
                  color: "black",
                  margin: "4px"
                }}
                target="_blank"
                href="https://www.npmjs.com/package/react-sticky"
                rel="noreferrer noopener"
              >
                README
              </a>
              <Emoji symbol="👈" />
            </StyledParagraph>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
