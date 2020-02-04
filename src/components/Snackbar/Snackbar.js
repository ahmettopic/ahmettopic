import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";

class SnackBar extends Component {
  render() {
    return (
      <StyledDiv
        style={{
          backgroundColor: "#dd4444",
          height: "7vh",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12}>
            <StyledParagraph>
              New <u>release</u> is finally deployed!
            </StyledParagraph>
          </Grid>
        </Grid>
      </StyledDiv>
    );
  }
}

export default SnackBar;
