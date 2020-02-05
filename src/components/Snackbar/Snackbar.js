import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

class SnackBar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#dd4444",
          height: "7vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12}>
            <StyledParagraph>
              New
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
                release
              </a>
              is finally deployed!
            </StyledParagraph>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
